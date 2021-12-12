import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import LogInPages from '../pages/LogInPages';

const mainRoutes = [
  {
    name: 'home',
    path: '/',
    component: <HomePage />,
  },
  {
    name: 'My Contacts',
    path: '/contacts',
    component: <ContactsPage />,
  },
  {
    name: 'LOG IN',
    path: '/login',
    component: <LogInPages />,
  },
  {
    name: 'SIGN UP',
    path: '/register',
    component: <SignUpPage />,
  },
];
export default mainRoutes;
