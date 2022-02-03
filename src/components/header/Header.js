import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <div>
            <nav className="header">
                <h2 className="logo">Tech Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/article-list">Articles</Link>
                    <Link className="logout" to="/logout">Logout</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;