import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/default-profile-pic.jpg';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     {
        //         id: 1, photoUrl: 'https://static.tumblr.com/4a18d9f4bee9d4e2e40094361cb8baa5/6e8sial/gLPncbcwb/tumblr_static_athzgoshqm80s888c0g8scssk.jpg',
        //         friendRequest: true, fullName: 'Nathan S.', status: '123', location: { city: 'Chicago', country: 'USA' }
        //     },
        //     {
        //         id: 2, photoUrl: 'https://i.pinimg.com/originals/ac/38/0e/ac380e7f62d3c3d6e78388e68b983e58.jpg',
        //         friendRequest: false, fullName: 'Arthur M.', status: '123', location: { city: 'Louisville', country: 'USA' }
        //     },
        //     {
        //         id: 3, photoUrl: 'https://vignette.wikia.nocookie.net/steamtradingcards/images/9/92/Call_of_Juarez_Gunslinger_Artwork_1.jpg/revision/latest?cb=20140704052825',
        //         friendRequest: false, fullName: 'Silas G.', status: '123', location: { city: 'San Antonio', country: 'USA' }
        //     },
        //     {
        //         id: 4, photoUrl: 'https://vignette.wikia.nocookie.net/reddeadredemption/images/b/b6/JohnMarston-Redemption2.jpg/revision/latest?cb=20181029233058',
        //         friendRequest: false, fullName: 'Jim M.', status: '123', location: { city: 'Louisville', country: 'USA' }
        //     },
        // ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unFollow(u.id) }}>Remove Friend</button>
                            : <button onClick={() => { props.follow(u.id) }}>Add Friend</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
};

export default Users;