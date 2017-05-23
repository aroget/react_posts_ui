import React from 'react'

import { API } from '../config/api';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { BaseService } from '../base/base.service';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';


class Compose extends React.Component {
  service;

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      open: false,
      loading: true,
      form: {
        tags: [-1],
        title: null,
        body: null,
        hero_image: null,
        is_published: false,
      }
    }
  }


  componentWillMount() {
    this.service = new BaseService();
    let fetch = this.service.get(`${API.RESOURCES.TAGS}`);
    fetch
      .then(res => this.setState({tags: res.data.response}))
      .catch(err => console.log(err))
  }

  handleTagChange = (event, index, value) => this.setState({form: Object.assign({}, this.state.form, {tags: [value]})});

  handleTitleChange = (event, newValue) => this.setState({form: Object.assign({}, this.state.form, {title: newValue})});

  handleBodyChange = (event, newValue) => this.setState({form: Object.assign({}, this.state.form, {body: newValue})});

  onToggle = (event, isInputChecked) => this.setState({form: Object.assign({}, this.state.form, {is_published: !isInputChecked})});

  onSubmit = () => {
    let post = this.service.post(this.state.form, API.RESOURCES.POSTS);
    post
      .then(res => {
        this.setState({open: true});
      })
      .catch(err => console.log(err))
  }

  render() {
    const styles = {
      wrapper: {
        maxWidth: '400px',
        margin: '0 auto'
      },
      noPadding: {
        paddingLeft: 0
      },
      toggle: {
        marginBottom: 16,
      },
    };

    return (
      <div style={styles.wrapper}>
        <TextField
          hintText="Title"
          fullWidth={true}
          floatingLabelText="Title"
          onChange={this.handleTitleChange}
        /><br />

        <TextField
          hintText="Body"
          fullWidth={true}
          floatingLabelText="Body"
          onChange={this.handleBodyChange}
          multiLine={true}
        /><br />

        <DropDownMenu value={this.state.form.tags[0]} onChange={this.handleTagChange} style={styles.noPadding}>
          <MenuItem key={-1} value={-1} primaryText={'Pick a Tag'} />
          {this.state.tags.map(tag => <MenuItem key={tag.id} value={tag.id} primaryText={tag.name}/>)}
        </DropDownMenu>

        <Toggle
          label="Draft"
          style={styles.toggle}
          onToggle={this.onToggle}
        />

        <Snackbar
          open={this.state.open}
          message="Post Saved"
          autoHideDuration={2000}
        />

        <RaisedButton label="Save" primary={true} onTouchTap={this.onSubmit}/>
      </div>
    )
  }
}



export default Compose