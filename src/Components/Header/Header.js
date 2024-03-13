import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (<header className={s.header}>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7acp2NExpYoVMo6rbOUYNQHaHS%26pid%3DApi&f=1&ipt=72abbfa144715c21b44e876075c324fcf8b90a968959366a029c94396111bacd&ipo=images"></img>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
    );
};

export default Header;
