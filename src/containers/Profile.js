import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

import { API } from '../config/api';
import { BaseService } from '../base/base.service';


class componentName extends React.Component {
  service;
  profile;

  constructor(props) {
    super(props);
    this.service = new BaseService();
    this.state = { loading: true }
  }

  componentWillMount() {
    let data = this.service.get(`${API.RESOURCES.PROFILE}`);
    data.then(res => {
      this.profile = res.data;
      this.setState({ loading: false });
    })
  }

  render() {
    const loading = this.state.loading;
    if (loading) {
      return <LinearProgress mode="indeterminate" />;
    }
    return (
      <Card>
        <CardHeader
          title={`${this.profile.first_name} ${this.profile.last_name}`}
          avatar={this.profile.avatar}
          subtitle={this.profile.email}/>

        <CardActions>
          <FlatButton label="Update" />
        </CardActions>
      </Card>
    )
  }
}



export default componentName