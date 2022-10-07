import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./cartWidget/CartWidget";
import "./topbar.scss";

const Topbar = () => {
    return (
        <div className="topbarContainer">
            <nav className="topbar">
                <div className="left">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <CartWidget />
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Topbar;
