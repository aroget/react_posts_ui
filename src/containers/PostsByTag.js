import React from 'react'

import { API } from '../config/api';
import Snackbar from 'material-ui/Snackbar';
import CardPost from '../components/CardPost'
import { List, ListItem } from 'material-ui/List';
import { BaseService } from '../base/base.service';

class PostsByTag extends React.Component {
  tagId;
  service;

  constructor(props) {
    super(props);
    this.service = new BaseService();
    this.state = {
      posts: [],
      open: false,
    }
    this.tagId = this.props.match.params.id;
  }

  componentWillMount() {
    let fetch = this.service.get(`${API.RESOURCES.TAG}/${this.tagId}/posts`);
    fetch.then(posts => {
      this.setState({ posts: posts.data.response });
    });
  }

  onHandleDelete = (id) => {
    let deletePost = this.service.delete(`${API.RESOURCES.POST}/${id}/delete`);
    deletePost
      .then(res => {
        this.setState(
          {
            open: true,
            posts: this.state.posts.filter(post => post.id !== id)
          }
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    const ulStyles = {
      listStyle: 'none',
      paddingLeft: 0
    };

    let posts = this.state.posts.map(post => {
      return (
        <List
          key={post.id}>
          <ListItem hoverColor={'transparent'}>
            <li>
              <CardPost
                {...post}
                title={post.title}
                handleDelete={this.onHandleDelete} />
            </li>
          </ListItem>
        </List>
      )
    })
    return (
      <div>
        <ul style={ulStyles}>
          {posts}
        </ul>

        <Snackbar
          open={this.state.open}
          message="Deleted!"
          autoHideDuration={2000}
        />
      </div>
    )
  }
}

export default PostsByTag
