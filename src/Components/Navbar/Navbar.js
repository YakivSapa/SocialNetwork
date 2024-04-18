import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navItems}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.navItems}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.navItems}>
                <NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.navItems}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.navItems}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.navItems}>
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;