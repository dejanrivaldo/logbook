import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header style={headerStyle}>
            <h1>Program Logbook</h1>
            </header>

        )
        
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'

}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;