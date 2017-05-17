import React from 'react'

import { API } from '../config/api';
import { BaseService } from '../base/base.service';

class Compose extends React.Component {
  service;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }


  componentWillMount () {
    this.service = new BaseService();
    let fetch = this.service.get(`${API.RESOURCES.TAGS}`);
    fetch
      .then(res => console.log(res.response))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        Write
      </div>
    )
  }
}

export default Compose