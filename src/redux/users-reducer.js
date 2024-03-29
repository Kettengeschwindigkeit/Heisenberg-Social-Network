const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [
        // { id: 1, followed: true, name: 'Walter White', status: "Fuck you and your eyebrows", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://s.yimg.com/uu/api/res/1.2/fuocpZreAHumoxAHr6S5RA--~B/aD00MTI7dz0zMjU7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en_US/News/TheWrap/_Breaking_Bad_s__Walter_White_Gets-36e17673e8431bcc6ef83d652869393c' },
        // { id: 2, followed: true, name: 'Jesse Pinkman', status: "Hey! What up, beyotch!", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://i.insider.com/5d9f3f5183486904582ee506?width=700' },
        // { id: 3, followed: false, name: 'Hank Schrader', status: "It's easy money - 'Til we catch you", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://sun6-19.userapi.com/o8HyngNuGhAPvWUKLGPSZQdBP4-uhKvuE6wV7Q/kQLS-1ENC8U.jpg' },
        // { id: 4, followed: false, name: 'Walter J. White', status: "Yo", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://pbs.twimg.com/profile_images/3015927487/2a891f966fc3d0605593200f79ad8739_400x400.jpeg' }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [2, 3]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId] 
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export default usersReducer 
