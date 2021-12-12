import { Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tokenSelector } from '../../redux/auth/auth-selectors';
import HomePage from '../../pages/HomePage';
import ContactsPage from '../../pages/ContactsPage';
import SignUpPage from '../../pages/SignUpPage';
import LogInPages from '../../pages/LogInPages';

const Main = () => {
  const isAuth = useSelector(tokenSelector);
  return (
    <main>
      <Routes>
        {isAuth ? (
          <Route path="/" element={<Navigate replace to="/contacts" />} />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
        {isAuth ? (
          <Route
            path="/register"
            element={<Navigate replace to="/contacts" />}
          />
        ) : (
          <Route path="/register" element={<SignUpPage />} />
        )}
        {isAuth ? (
          <Route path="/login" element={<Navigate replace to="/contacts" />} />
        ) : (
          <Route path="/login" element={<LogInPages />} />
        )}
        {isAuth ? (
          <Route path="/contacts" element={<ContactsPage />} />
        ) : (
          <Route path="/contacts" element={<Navigate replace to="/login" />} />
        )}
      </Routes>
    </main>
  );
};

export default Main;
