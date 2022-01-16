import React from "react";
import './Nav.scss'
import {

    Link, NavLink
} from "react-router-dom";
class Nav extends React.Component {

    render() {

        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact>
                    Home
                </NavLink>
                <NavLink to="/Todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    user
                </NavLink>


            </div>
        )
    }
}
export default Nav;