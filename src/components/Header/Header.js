import NavigationsItem from './NavigationsItem/NavigationsItem';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  navList,
  headerContainer,
  navBar,
  headertitle,
} from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <Navbar className={navBar}>
        <Container className={headerContainer}>
          <Link className={headertitle} to="/">
            <span className={headertitle}>PHONEBOOK</span>
          </Link>
          <Nav className="me-aut">
            <ul className={navList}>
              <NavigationsItem />
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
