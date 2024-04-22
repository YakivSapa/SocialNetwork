import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/default-profile-pic.jpg'
import { NavLink } from 'react-router-dom';
import s from '../Dialogs/Dialogs.module.css';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return <div className={styles.userSpace}>
        <span>
            <div>
                <NavLink to={'./../profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                </NavLink>
            </div>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <div>
                {user.followed
                    ? <button className={s.button} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</button>
                    : <button className={s.button} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</button>
                }
            </div>
        </span>
        {/* <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span> */}
    </div>
}

export default User;