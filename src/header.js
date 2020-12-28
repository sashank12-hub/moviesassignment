
import React, { Component } from 'react';
import "./Card.css";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div> <h1 className="heading"><span className="text">Movies</span></h1></div> );
    }
}
 
export default Header;

