import React, { Component } from 'react'


class Navbar extends Component {
    // defaultProps are useful when no props are manually provided, it can be overrided
    static defaultProps = {
        title: 'Github Finder'
    }
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar


