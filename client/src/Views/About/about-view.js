import React from 'react';
import './about-view.scss';
import { Navbar3 } from '../../Components/Navbar3';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ListItemText } from '@material-ui/core';

const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class About extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    
    const { classes } = this.props;
    const { venueList } = {venue:"hello"}

    const sideList = (
      <div className={classes.list}>
        <List>{venueList}</List>
        <Divider />

      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>{venueList}</List>
        <Divider />

      </div>
    );
    return (
      <div>
        <Navbar3/>
      <div className='container'>
      <div className='about'>
        <div className='p1'>
        <h1 className='h1-p2'>
          How It Works
        </h1>
        <div className='p1-body'>
            We search the schedules of 30+ venues in Tokyo to make it easier for you to find out if your favorite artists are performing.  
        </div>
        </div>
        <div className='p2'>
        <h1 className='h2-p2'>
        <Button style={{ fontSize: '24px', backgroundColor: "red" }} className={classes.button} variant="contained" color="secondary" onClick={this.toggleDrawer('bottom', true)}>List of Venues</Button>
        <Drawer anchor='bottom' open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('bottom', false)}
                  onKeyDown={this.toggleDrawer('bottom', false)}
                >
                  <List>
                  Zepp Tokyo, Zepp Divercity Tokyo, Toyosu Pit, Liquid Room, Akasaka Blitz, The Room, Shinjuku Loft, Shibuya Quattro, WWW, Shimokitazawa SHELTER, LOFT/PLUS ONE, LOFT9 Shibuya, Naked Loft, Asagaya / Loft A, Studio Coast, Garage, Loft PlusOne West, Rock Cafe Loft,Loft Heaven, Basement Bar, Super Deluxe, Chop Tokyo, Mismatch Ikebekuro 
                  </List>
                </div>
              </Drawer>
        </h1>
        </div>
      </div>
      </div>
      </div>
      )

  }
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
