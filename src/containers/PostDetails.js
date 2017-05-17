import React from 'react'
import LinearProgress from 'material-ui/LinearProgress';

import { API } from '../config/api';
import { BaseService } from '../base/base.service';
import CardPostDetails from '../components/CardPostDetails';

class PostDetails extends React.Component {
  post;
  service;

  constructor(props) {
    super(props);
    this.state = { loading: true }
    this.service = new BaseService();
  }


  componentWillMount () {
    let postId = this.props.match.params.id;
    let fetch = this.service.get(`${API.RESOURCES.POST}/${postId}`);

    fetch
      .then(res => {
        this.post = res.response;
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  }

  render () {
    const loading = this.state.loading;

    if (loading) {
      return <LinearProgress mode="indeterminate" />;
    }

    return (
      <CardPostDetails {...this.post}/>

    )
  }
}

export default PostDetails