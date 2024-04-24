import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import s from './Users.module.css';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <p className={s.usersCount}>Users count: {totalUsersCount}</p>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div className={s.userList}>
            {
                users.map(u => <User
                    user={u} followingInProgress={props.followingInProgress} key={u.id} unfollow={props.unfollow} follow={props.follow}
                />
                )
            }
        </div>
    </div>
}

export default Users;