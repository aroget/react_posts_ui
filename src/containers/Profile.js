import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

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
      console.log(res);
      this.profile = res;
      this.loading = false;
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
          title="URL Avatar"
          subtitle={this.profile.email}
          avatar={this.profile.avatar}
        />
        <CardMedia
          overlay={<CardTitle title={`${this.profile.first_name} ${this.profile.last_name}`} subtitle={this.profile.email} />}
        >
          <img src={this.profile.avatar} alt={`${this.profile.first_name} ${this.profile.last_name}`}/>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}

export default componentName