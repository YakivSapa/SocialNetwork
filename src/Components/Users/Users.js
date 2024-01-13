import styles from './Users.module.css';

let Users = (props) => {

    props.setUsers()

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.friendRequest
                            ? <button onClick={() => { props.unFollow(u.id) }}>Remove Friend</button>
                            : <button onClick={() => { props.follow(u.id) }}>Add Friend</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
};

export default Users;