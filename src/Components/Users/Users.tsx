import React, { FC } from 'react';
import Paginator from '../common/Paginator/Paginator.tsx';
import User from './User.js';
import s from './Users.module.css';
import { UserType } from '../../types/types';

type Props = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: () => void
    follow: () => void

}

let Users: FC<Props> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
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