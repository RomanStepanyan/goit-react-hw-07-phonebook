import { useState } from 'react';

import { useDispatch, connect } from 'react-redux';
import { addContacts, getContacts } from '../../Redux/Operations';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  // dispatch(getContacts());

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeNameForm = ({ target }) => {
    // const { name, value } = target;
    setName(target.value);
  };

  const handleChangeNumberForm = ({ target }) => {
    // const { name, value } = target;
    setNumber(target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addContacts({ name, number }));
    // dispatch(getContacts());
    setNumber('');
    setName('');
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChangeNameForm}
      />

      <input
        type="tel"
        name="number"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChangeNumberForm}
      />

      <button type="submit">Add contact</button>
    </form>
  );
};

export default connect()(ContactForm);
