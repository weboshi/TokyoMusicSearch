import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';
import './footer.scss';

export default class navbar extends Component {
  
  
    render() {
      return (
        <div className='foot'>
        <div className='footer-copyright'>
        Copyright © Weboshi Labs 2018
        </div>
      </div>
  
      )
    }
    }