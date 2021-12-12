import { useDispatch, useSelector } from 'react-redux';
import { signOutOperation } from '../../redux/auth/auth-operations';
import { getNameSelector } from '../../redux/phonebook/selectors';
import { navItem } from '../Header/NavigationsItem/NavigationsItem.module.css';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getNameSelector);
  return (
    <div>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span className={navItem}>Добро пожаловать, {name} </span>
      <button
        className={navItem}
        type="button"
        onClick={() => dispatch(signOutOperation())}
      >
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;
