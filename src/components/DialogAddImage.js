import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FloatingActionButton from 'material-ui/FloatingActionButton';

class DialogAddImage extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const addButtonStyles = {
      position: 'fixed',
      bottom: '30px',
      right: '30px'
    }

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton
          mini={true}
          secondary={true}
          style={addButtonStyles}
          onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add new Image"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only JPG or PNG max 5MB
          <input type="file"/>
        </Dialog>
      </div>
    );
  }
}

export default DialogAddImage