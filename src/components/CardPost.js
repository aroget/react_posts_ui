import React from 'react';
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

class CardExampleExpandable extends React.Component {
  constructor(props) {
    super(props);

    this.onHandleDelete = this.onHandleDelete.bind(this);
  }
  onHandleDelete() {
    this.props.handleDelete(this.props.id);
  }

  render() {
    const subtitle = this.props.published_date ? this.props.published_date : 'Draft';
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.title}
            subtitle={subtitle}
          />
          <CardActions>
            <Link to={`/post/${this.props.id}`}><FlatButton primary={true}>View More</FlatButton></Link>
            <FlatButton secondary={true} onTouchTap={this.onHandleDelete}>Delete</FlatButton>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CardExampleExpandable;