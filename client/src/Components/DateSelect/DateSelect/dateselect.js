import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    month: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="month-simple">Month</InputLabel>
          <Select
            value={this.state.month}
            onChange={this.handleChange}
            inputProps={{
              name: 'month',
              id: 'month-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>JAN</MenuItem>
            <MenuItem value={20}>FEB</MenuItem>
            <MenuItem value={30}>MAR</MenuItem>
            <MenuItem value={40}>APR</MenuItem>
            <MenuItem value={50}>MAY</MenuItem>
            <MenuItem value={60}>JUN</MenuItem>
            <MenuItem value={70}>JUL</MenuItem>
            <MenuItem value={80}>AUG</MenuItem>
            <MenuItem value={90}>SEP</MenuItem>
            <MenuItem value={100}>OCT</MenuItem>
            <MenuItem value={110}>NOV</MenuItem>
            <MenuItem value={120}>DEC</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);