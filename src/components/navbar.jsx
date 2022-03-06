import React, { Component } from 'react';
class NavBar extends React.Component {
    render() {
        console.log("Nav");
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                </div>
            </nav>
        );
    }
}

export default NavBar;