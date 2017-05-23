import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardPostDetail extends React.Component {

  render() {
    let hero_image = this.props.hero_image ? this.props.hero_image : 'https://source.unsplash.com/random/700x300';
    return (
      <div>
          <Card>
          <CardHeader
            title={this.props.title}
            subtitle={`${this.props.author.first_name} ${this.props.author.last_name}`}
            avatar={this.props.hero_image}
          />
          <CardMedia>
            <img src={hero_image} alt={'no graph it seems'}/>
          </CardMedia>
          <CardTitle title={this.props.title} subtitle={this.props.published_date} />
          <CardText>
            {this.props.body}
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CardPostDetail