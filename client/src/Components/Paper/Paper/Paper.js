import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import axios from "axios";
const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#ADD8E6'
};
const text = {
  height: 300,
  width: 300,
  textAlign: 'left',
  elevation: 5
}



export default class paperState extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        stateLookup: "",
      }
    }
  
render() {
    return (
    <MuiThemeProvider>
      <div>
    
    <div style={text}>
    {<h1>Welcome!</h1>}
    {<h1>
      Our goal is to provide voters with information such as campaign contributors and floor votes to give a clearer picture of their representatives.</h1>}
    <Paper style={style} zDepth={3} />
    </div>

      
      
    
    </div>
    </MuiThemeProvider>
    )
  }
  }

  // export default withRouter(searchState);