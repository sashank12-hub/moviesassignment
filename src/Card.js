import React, { Component } from 'react';
import "./Card.css";
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { let {item}=this.props;
        return ( 

                <div className="card">
                      
                    <p className="title">{item.Title}</p>
                <img  className="image" src={item.Poster}/>
                
                </div>

         );
    }
}
 
export default Card;