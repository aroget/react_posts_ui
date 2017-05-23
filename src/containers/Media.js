import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import { API } from '../config/api';
import CardImage from '../components/CardImage';
import { BaseService } from '../base/base.service';
import DialogAddImage from '../components/DialogAddImage';

class Media extends React.Component {
  service;

  constructor(props) {
    super(props);

    this.service = new BaseService();

    this.state = {
      loading: true,
      media: []
    }

    this.onHandleAddMedia = this.onHandleAddMedia.bind(this);
  }

  componentWillMount() {
    let fetch = this.service.get(API.RESOURCES.MEDIA);

    fetch.then(media => {
      this.setState({
        media: media.data.response,
        loading: false
      });
    });
  }

  onHandleAddMedia(file) {
    let post = this.service.postMedia(file, API.RESOURCES.MEDIA);
    post
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  render () {
    const loading = this.state.loading;

    const media = this.state.media.map(image => <CardImage key={image.id} url={image.url}/>)

    if (loading) {
      return <LinearProgress mode="indeterminate" />;
    }

    return (
      <div>
        {media}
        <DialogAddImage handleAddMedia={this.onHandleAddMedia}/>
      </div>
    )
  }
}

export default Media