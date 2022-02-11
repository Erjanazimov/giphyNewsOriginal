import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex justify-content-around pt-3 pb-3 fixed-top bg-dark">
            <nav>
                <Link to="/" type="button" className="btn btn-outline-success mx-4">Trending</Link>
                <Link to="/random" type="button" className="btn btn-outline-danger">Random</Link>
            </nav>
        </div>
    );
};

export default NavBar;