import React from 'react'
import { Link } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render () {
    const styles = {
      mobileWrapper: {
        backgroundColor: 'rgb(0, 188, 212)',
        padding: '15px',
        textAlign: 'center'
      },
      icon: {
        color: '#fff',
        fontSize: '30px'
      }
    }
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<Link to='/create'><RaisedButton secondary={true} label="New Post"></RaisedButton></Link>}/>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <div style={styles.mobileWrapper}>
            <FontIcon className="material-icons" style={styles.icon}>whatshot</FontIcon>
          </div>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/'>
              <FlatButton hoverColor={'transparent'}>
                Posts
              </FlatButton>
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/media'>
              <FlatButton hoverColor={'transparent'}>
                Media
              </FlatButton>
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/profile'>
              <FlatButton hoverColor={'transparent'}>
                Profile
              </FlatButton>
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/tags'>
              <FlatButton hoverColor={'transparent'}>
                Tags
              </FlatButton>
            </Link>
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default TopBar