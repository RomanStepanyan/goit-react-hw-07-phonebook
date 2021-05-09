import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getContacts } from './Redux/Operations';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import FilterContacts from './components/FilterContacts/FilterContacts';
import s from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Contact form</h2>

      <ContactForm />

      <h2 className={s.title}>Contact list</h2>

      <FilterContacts />

      <ContactsList />
    </div>
  );
};
