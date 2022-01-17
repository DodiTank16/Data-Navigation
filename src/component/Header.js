import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() { 
        return (<div>
            <ul>
        <li>
          <Link className="active" to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          {/* <Link to="/contact">Contact Us</Link> */}
        </li>
      </ul>
        </div>);
    }
}
 
export default Header;