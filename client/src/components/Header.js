import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="App-header">
            <Link to="/">
                All Activities
            </Link>

            <Link to="/show">
                <button className="btn btn-outline-warning">Show Records</button>
            </Link>
        </div>
    )
}

export default Header;