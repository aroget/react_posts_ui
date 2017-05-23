import React from 'react'

import CardPost from '../components/CardPost'
import {List, ListItem} from 'material-ui/List';
import { BaseService } from '../base/base.service';


class Posts extends React.Component {
  service;

  constructor(props) {
    super(props);
    this.service = new BaseService();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    let fetch = this.service.get('posts?is_published=1&is_archived=0');
    fetch.then(posts => {
      this.setState({ posts : posts.data.response });
    });
  }

  render() {
    const ulStyles = {
      listStyle: 'none',
      paddingLeft: 0
    }

    let posts = this.state.posts.map(post => {
      return <List key={post.id}><ListItem hoverColor={'transparent'}><li><CardPost id={post.id} title={post.title} published_date={post.published_date}/></li></ListItem></List>
    })
    return (
      <ul style={ulStyles}>
        {posts}
      </ul>
    )
  }
}

export default Posts