import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInOperation } from '../redux/auth/auth-operations';

const initialState = {
  email: '',
  password: '',
};

const LogInPages = () => {
  const [user, setUser] = useState({
    ...initialState,
  });
  const location = useLocation();
  const dispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (location.pathname === '/login') {
      dispatch(signInOperation(user));
    }
    setUser(initialState);
  };
  return (
    <>
      <h2>LOG IN</h2>
      <Form onSubmit={onHandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={onHandleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={onHandleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LogInPages;
