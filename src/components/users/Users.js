import React, {Component} from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users : [
            {
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "html_url": "https://github.com/mojombo",
            },
            {
                "login": "faisal",
                "id": 2,
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "html_url": "https://github.com/mojombo",
            },
            {
                "login": "khalid",
                "id": 3,
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "html_url": "https://github.com/mojombo",
            }
        ]
    }
    render() {
        return(
            <div style={userStyle}>
                {this.state.users.map(user => (
           
                    // <div key={user.id}>   {user.login} </div>
                    <UserItem key={user.id} user={user} /> // passing as props to UserItem
   
                ))}             
            </div>

        )

    }

}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };
export default Users;
