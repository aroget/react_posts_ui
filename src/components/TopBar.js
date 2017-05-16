import React from 'react'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';

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
    return (
      <div>
        <AppBar
          title="Posts App"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"/>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/'>
              <FlatButton primary={true}>
                Home
              </FlatButton>
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/media'>
              <FlatButton primary={true}>
                Media
              </FlatButton>
            </Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='/profile'>
              <FlatButton primary={true}>
                Profile
              </FlatButton>
            </Link>
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default TopBar