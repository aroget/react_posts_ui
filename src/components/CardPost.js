import React from 'react';
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

class CardExampleExpandable extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.title}
            subtitle={this.props.published_date}
          />
          <CardActions>
            <Link to={`/post/${this.props.id}`}><FlatButton primary={true}>View More</FlatButton></Link>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CardExampleExpandable;