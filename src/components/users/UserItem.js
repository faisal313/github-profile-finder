import React, { Component } from 'react'

class UserItem extends Component {
    // state = {
    //     "login": "mojombo",
    //     "id": 1,
    //     "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
    //     "html_url": "https://github.com/mojombo",
    // }

    render() {
        // const {avatar_url, login, html_url} = this.state // objects destructuring
        //                                         // else had to do {this.state.avatar_url}

        const {avatar_url, login, html_url} = this.props
        return (
            
            <div className='card text-center'>
                <img src = {avatar_url} className='round-img' style={{width:100}}/>
            
                <h3>{login}</h3>
                
                <div>
                    <a href={html_url} >More Information</a>
                </div>
            </div>
        )
    }
}

export default UserItem
