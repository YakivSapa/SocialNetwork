import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import userPhoto from "../../assets/images/default-profile-pic.jpg";

const Header = (props) => {
    return (<header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div><img src={props.userPhoto || userPhoto} /> - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
    );
};

export default Header;
