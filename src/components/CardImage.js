import React from 'react'
import { Card, CardActions, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardImage extends React.Component {
  handleDelete = () => this.props.handleDelete(this.props.id)

  render () {
    return (
      <Card>
        <CardMedia>
          <img src={this.props.url} alt="alt text" />
        </CardMedia>
        <CardActions>
          <FlatButton label="Delete" onTouchTap={this.handleDelete}/>
        </CardActions>
      </Card>
    )
  }
}

export default CardImage