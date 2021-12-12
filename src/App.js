import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { getCurrentUser } from './redux/auth/auth-operations';
import { getContactsOperation } from './redux/phonebook/operations';
import { tokenSelector } from './redux/auth/auth-selectors';
import s from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(tokenSelector);
  useEffect(() => {
    isAuth && dispatch(getCurrentUser());
    isAuth && dispatch(getContactsOperation());
  }, [dispatch, isAuth]);

  return (
    <>
      <Header />
      <div className={s.phonebook}>
        <Main />
      </div>
    </>
  );
};

export default App;
