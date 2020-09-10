import React from 'react';
// import ReactDOM from 'react-dom';
import './Header.css'
const Header = ({ todo, done }) => {
    return (
        <div className="d-flex app-header">
            <h1>My TODO List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    )

};

export default Header;