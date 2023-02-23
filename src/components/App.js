import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [
    { name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' }
    ]
  }

  render() {
    let count =0;
    return (
      <div id="main">
        <ol>
          {this.cityList.filter(city=>{
            if(city.country==="India"){
              count++
            }
            return city.country==="India"&&count<=3
    
          }).map((city,index)=>{
           return <li key={location${index+1}}>{city.name}</li>
          })}
        </ol>
        
      </div>
    )
  }
}


export default App;
