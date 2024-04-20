import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (<header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> Welcome, {props.login} - <button onClick={props.logout} className={s.button}>Log out</button> </div>
                : <NavLink to={'/login'} className={s.button}>Login</NavLink>}
        </div>
    </header>
    );
};

export default Header;
