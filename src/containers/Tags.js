import React from 'react'
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

import { API } from '../config/api';
import { BaseService } from '../base/base.service';

class Tags extends React.Component {
  service;

  constructor(props) {
    super(props);
    this.service = new BaseService();
    this.state = {
      tags: []
    }
  }


  componentWillMount () {
    let fetch = this.service.get(`${API.RESOURCES.TAGS}`);
    fetch
      .then(res => this.setState({ tags: res.data.response }))
      .catch(err => console.log(err))
  }

  handleTouchTap = (tag) => {
    console.log('deleting', tag.id);
  }

  onKeyup = (_, event) => {
    if (event.keyCode === 13) {
      this.saveTag(event.target.value);
      event.target.value = '';
    }
  }

  saveTag = (name) => {
    let save = this.service.post({ name }, `${API.RESOURCES.TAGS}`);

    save
      .then(res => {
        this.setState(
          { tags:
            [res.data.response, ...this.state.tags]
          }
        )
      })
      .catch(err => console.log(err))
  }

  render () {
    const styles = {
      chip: {
        display: 'inline-block',
        marginRight: '8px'
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      tagInput: {
        width: '100%',
        marginBottom: '20px'
      }
    }
    return (
      <div>
        <TextField
          style={styles.tagInput}
          hintText="New Tag" floatingLabelText="New Tag"
          onKeyUp={this.onKeyup.bind(this, event)}/>
        <br/>
        <br/>
        <div style={styles.wrapper}>
          {this.state.tags.map(tag => {
            return (
              <Chip
                key={tag.id}
                style={styles.chip}
                onTouchTap={this.handleTouchTap.bind(this, tag)}>
                  <span style={styles.chipTag}>
                    {tag.name}
                  </span>
                </Chip>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Tags