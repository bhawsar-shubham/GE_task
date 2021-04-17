import React from 'react';
import { IoIosCog } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg mt-1">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><IoIosCog className="si" /> LoGo </NavLink>
                    <div>
                    <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                        <li className="nav-item">
                    <NavLink activeClassName="ac" className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                    <NavLink activeClassName="ac" className="nav-link" to="/signup">Signup</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
