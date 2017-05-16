import React from 'react'

import { BaseService } from '../base/base.service';
import CardPost from '../components/CardPost'

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
      this.setState({ posts : posts.response });
      console.log(posts.response);
    });
  }

  render() {
    const ulStyles = {
      listStyle: 'none',
      paddingLeft: 0
    }

    let posts = this.state.posts.map(post => {
      return <li key={post.id}><CardPost id={post.id} title={post.title} published_date={post.published_date}/></li>
    })
    return (
      <ul style={ulStyles}>
        {posts}
      </ul>
    )
  }
}

export default Posts