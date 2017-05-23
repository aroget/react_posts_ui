import React from 'react'

import { API } from '../config/api';
import Snackbar from 'material-ui/Snackbar';
import CardPost from '../components/CardPost'
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import { BaseService } from '../base/base.service';


class Posts extends React.Component {
  service;

  constructor(props) {
    super(props);
    this.service = new BaseService();
    this.state = {
      posts: [],
      open: false,
      filterBy: 1
    }

    this.onFilterBy = this.onFilterBy.bind(this);
  }

  componentWillMount() {
    let fetch = this.service.get('posts?is_published=1&is_archived=0');
    fetch.then(posts => {
      this.setState({ posts : posts.data.response });
    });
  }

  onFilterBy(type) {
    switch (type) {
       case 1:
        this.setState({filterBy : 1});
        let fetchActive = this.service.get('posts?is_published=1&is_archived=0');
        fetchActive.then(posts => this.updatePostState(posts.data.response))
        break;
      case 2:
        this.setState({filterBy : 2});
        let fetchDraft = this.service.get('posts?is_published=0&is_archived=0');
        fetchDraft.then(posts => this.updatePostState(posts.data.response))
        break;
      case 3:
        this.setState({filterBy : 3});
        let fetchArchive = this.service.get('posts?is_published=0&is_archived=1');
        fetchArchive.then(posts => this.updatePostState(posts.data.response))
        break;
      default:
        break;
    }
  }

  updatePostState(posts) { this.setState({ posts }) }

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
    }

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
        <div className="filters">
          <FlatButton label="Active" primary={this.state.filterBy === 1} onTouchTap={this.onFilterBy.bind(this, 1)} />
          <FlatButton label="Drafts" primary={this.state.filterBy === 2} onTouchTap={this.onFilterBy.bind(this, 2)} />
          <FlatButton label="Archives" primary={this.state.filterBy === 3} onTouchTap={this.onFilterBy.bind(this, 3)} />
        </div>
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

export default Posts