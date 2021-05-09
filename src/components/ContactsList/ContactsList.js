import { connect, useDispatch } from 'react-redux';
// import { onRemove } from '../../Redux/Actions';
import { deleteContacts } from '../../Redux/Operations';

import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

// const ContactsListItem = ({ id, name, phone, onRemove }) => {
//   return (
//     <li className={s.contact}>
//       {name}: {phone} <button onClick={() => onRemove(id)}>Delete</button>
//     </li>
//   );
// };

const ContactsList = ({ items, onRemove }) => {
  const dispatch = useDispatch();

  if (items.length === 0) return null;
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className={s.contact}>
          <span className={s.contact_span}>{item.name}</span>{' '}
          <span className={s.contact_span}>{item.number}</span>
          <button
            className={s.button}
            onClick={() => dispatch(deleteContacts(item.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

export default connect(mapStateToProps)(ContactsList);

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
