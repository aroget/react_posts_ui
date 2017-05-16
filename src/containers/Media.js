import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';


import CardImage from '../components/CardImage';
import { BaseService } from '../base/base.service';
import DialogAddImage from '../components/DialogAddImage';

class Media extends Component {
  service;

  constructor(props) {
    super(props);

    this.service = new BaseService();

    this.state = {
      loading: true,
      media: []
    }
  }

  componentWillMount () {
    let fetch = this.service.get('media');
    fetch.then(media => {
      this.setState({
        media: media.response,
        loading: false
      });
      console.log(media.response);
    });
  }

  handleAddMedia = () => {
    console.log('adding');
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
        <DialogAddImage />
      </div>
    )
  }
}

export default Media