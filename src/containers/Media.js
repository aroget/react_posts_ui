import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import { API } from '../config/api';
import Snackbar from 'material-ui/Snackbar';
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
      media: [],
      open: false
    }

    this.onHandleAddMedia = this.onHandleAddMedia.bind(this);
    this.onHandleDelete = this.onHandleDelete.bind(this);
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

  onHandleDelete(id) {
    let deleteImage = this.service.delete(`${API.RESOURCES.MEDIA}/${id}/delete`);
    deleteImage
      .then(res => {
        this.setState(
          {
            open: true,
            media: this.state.media.filter(media => media.id !== id)
          }
        )
      })
      .catch(err => console.log(err))
  }

  onHandleAddMedia(file) {
    let post = this.service.postMedia(file, API.RESOURCES.MEDIA);
    post
      .then(res => {
        this.setState(
          {
            media: [res.data.response, ...this.state.media]
          }
        )
      })
      .catch(err => console.log(err))
  }


  render () {
    const loading = this.state.loading;

    const media = this.state.media.map(image => <CardImage key={image.id} {...image} handleDelete={this.onHandleDelete}/>)

    if (loading) {
      return <LinearProgress mode="indeterminate" />;
    }

    return (
      <div>
        {media}
        <DialogAddImage handleAddMedia={this.onHandleAddMedia}/>
        <Snackbar
          open={this.state.open}
          message="Delete"
          autoHideDuration={4000} />
      </div>
    )
  }
}

export default Media