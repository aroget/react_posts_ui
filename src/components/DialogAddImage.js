import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FloatingActionButton from 'material-ui/FloatingActionButton';

class DialogAddImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      file: null
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({file: event.target.files[0]});
    // this.props.handleAddMedia(event.target.files[0]);
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleSubmit() {
    this.props.handleAddMedia(this.state.file);
    this.handleClose();
  }

  render() {
    const isSubmitDisabled = !this.state.file ? true : false;

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
        disabled={isSubmitDisabled}
        onTouchTap={this.handleSubmit}
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
          <p>Only JPG or PNG max 5MB</p>
          <input type="file" onChange={this.handleChange}/>
        </Dialog>
      </div>
    );
  }
}

export default DialogAddImage