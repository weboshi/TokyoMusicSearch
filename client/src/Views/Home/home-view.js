import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Paper } from '../../Components/Paper';
import './home-view.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import { withRouter, Redirect } from 'react-router-dom';


export default class homePage extends Component {
  
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      artist: "",
      date: '',
      ready: 0,
    }};

    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
      console.log('hi')
    };
    
    onSubmit = e => {
      if(this.state.artist == '' || this.state.date == '') {
        return
      }
      else {
      this.setState({
        ready: 1,
      })
    }
      e.preventDefault();
    }

render() {
  const { classes } = this.props;
  return (
  <div className='main-container'>

  <div className="main">
    <div className='welcome'>
    <div className='homemessage'> <message1 style={{fontSize:'40px'}}>Tokyo Music Search</message1> <br/> <message2 style={{fontSize:'25px'}}> Type in the name of an artist to see if they are performing in Tokyo.</message2> </div>
    </div>
    <div className='search'>
      <div className="searchbar">
      <form autoComplete="off">
          <FormControl style={{height: '80px'}}>
            <InputLabel htmlFor="month-simple">Month</InputLabel>
            <Select
              name='date'
              value={this.state.date}
              onChange={this.handleChange}
              inputProps={{
                name: 'date',
                id: 'date-simple',
              }}
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={'01'}>JAN</MenuItem>
              <MenuItem value={'02'}>FEB</MenuItem>
              <MenuItem value={'03'}>MAR</MenuItem>
              <MenuItem value={'04'}>APR</MenuItem>
              <MenuItem value={'05'}>MAY</MenuItem>
              <MenuItem value={'06'}>JUN</MenuItem>
              <MenuItem value={'07'}>JUL</MenuItem>
              <MenuItem value={'08'}>AUG</MenuItem>
              <MenuItem value={'09'}>SEP</MenuItem>
              <MenuItem value={'10'}>OCT</MenuItem>
              <MenuItem value={'11'}>NOV</MenuItem>
              <MenuItem value={'12'}>DEC</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name='artist'
            id="with-placeholder"
            label="Name of Artist"
            placeholder="Utada Hikaru..."
            onChange={this.handleChange}
            style={{marginLeft: '50px', fontSize: '90px', width: '400px' }}

          />
            <Button type='submit' onClick={this.onSubmit} variant="fab" color="secondary" aria-label="edit" >
          <Icon>search_icon</Icon>
        </Button>
        </form>
      </div>
    </div>
  </div>
  { this.state.ready > 0 && <Redirect to={{
    pathname: '/results',
  state: { artist: this.state.artist, date: this.state.date} }}/> }
  </div>

)
}
}