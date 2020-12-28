import React, { Component } from 'react';
import Card from './Card'
import './App.css';
import Header from "./header";
class app extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    api:[],
    loader:true,

     }
  }
  componentDidMount(){


   
 fetch('https://www.omdbapi.com/?apikey=45f0782a&s=war')
  .then(Response=>Response.json()).then(json=>this.setState({api:json.Search,loader:false}))
  
  }

  render() { let{loader,api}=this.state;
  console.log((api));
    return ( 
              <>
              
            {loader? <div> <h1 style={{color:"whitesmoke"}}>loading...</h1> </div>:
            <>


            <Header/>
            <div className="main">

            
              

            {api?.map((item,index)=>{return <Card item={item}/>})}
            </div>
            
            </>
            }




              </>


     );
  }
}
 
export default app;