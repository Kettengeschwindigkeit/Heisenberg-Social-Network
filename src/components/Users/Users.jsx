import React from "react";
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.jpg'


const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
            // props.setUsers([
            //     { id: 1, followed: true, name: 'Walter White', status: "Fuck you and your eyebrows", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://s.yimg.com/uu/api/res/1.2/fuocpZreAHumoxAHr6S5RA--~B/aD00MTI7dz0zMjU7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en_US/News/TheWrap/_Breaking_Bad_s__Walter_White_Gets-36e17673e8431bcc6ef83d652869393c' },
            //     { id: 2, followed: true, name: 'Jesse Pinkman', status: "Hey! What up, beyotch!", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://i.insider.com/5d9f3f5183486904582ee506?width=700' },
            //     { id: 3, followed: false, name: 'Hank Schrader', status: "It's easy money - 'Til we catch you", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://sun6-19.userapi.com/o8HyngNuGhAPvWUKLGPSZQdBP4-uhKvuE6wV7Q/kQLS-1ENC8U.jpg' },
            //     { id: 4, followed: false, name: 'Walter J. White', status: "Yo", location: { state: 'New-Mexico', city: 'Albuquerque' }, photoUrl: 'https://pbs.twimg.com/profile_images/3015927487/2a891f966fc3d0605593200f79ad8739_400x400.jpeg' }
            // ])
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small !== null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.state"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users
