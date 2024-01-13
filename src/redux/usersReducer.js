const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1, photoUrl: 'https://static.tumblr.com/4a18d9f4bee9d4e2e40094361cb8baa5/6e8sial/gLPncbcwb/tumblr_static_athzgoshqm80s888c0g8scssk.jpg',
            friendRequest: true, fullName: 'Nathan S.', status: '123', location: { city: 'Chicago', country: 'USA' }
        },
        {
            id: 2, photoUrl: 'https://i.pinimg.com/originals/ac/38/0e/ac380e7f62d3c3d6e78388e68b983e58.jpg',
            friendRequest: false, fullName: 'Arthur M.', status: '123', location: { city: 'Louisville', country: 'USA' }
        },
        {
            id: 3, photoUrl: 'https://vignette.wikia.nocookie.net/steamtradingcards/images/9/92/Call_of_Juarez_Gunslinger_Artwork_1.jpg/revision/latest?cb=20140704052825',
            friendRequest: false, fullName: 'Silas G.', status: '123', location: { city: 'San Antonio', country: 'USA' }
        },
        {
            id: 4, photoUrl: 'https://vignette.wikia.nocookie.net/reddeadredemption/images/b/b6/JohnMarston-Redemption2.jpg/revision/latest?cb=20181029233058',
            friendRequest: false, fullName: 'Jim M.', status: '123', location: { city: 'Louisville', country: 'USA' }
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, friendRequest: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, friendRequest: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    };
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;