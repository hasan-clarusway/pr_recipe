import React, { Component } from 'react';
import {
  MainContainer,
  Header,
  DateContainer,
  TimeContainer
} from './Items.Style';

class Items extends Component {
   constructor() {
      super();
      this.state = {
          time: "", 
          date: ""
      };
   };
             
   timeDate = setInterval (
      () => {
         this.setState({
           time: new Date().toLocaleTimeString(),
           date: new Date().toLocaleDateString(),
         }); 
      },
      1000
   );
    render() {
       return ( 
         <MainContainer>            
         <div>
            <Header>Welcome to our webpage!</Header>
            <DateContainer> Today is: <h4>{this.state.date} </h4></DateContainer>
            <TimeContainer>It's: <h4>{this.state.time}</h4></TimeContainer>
            
         </div>
         </MainContainer>    
          ) 
       }                        
   };
         
 export default Items;