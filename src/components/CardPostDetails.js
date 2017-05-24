import React from 'react';
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class CardPostDetail extends React.Component {

  render() {
    const styles = {
      tagButton: {
        float: 'right'
      }
    };

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
            <img src={hero_image} alt={'no graph it seems'} />
          </CardMedia>
          <CardTitle title={this.props.title} subtitle={this.props.published_date}>
            {this.props.tags.map(tag => {
              return (
                <Link to={`/posts/tag/${tag.id}`} key={tag.id} style={styles.tagButton}>
                  <RaisedButton>
                    {tag.name}
                  </RaisedButton>
                </Link>
              )
            })}
          </CardTitle>
          <CardText>
            {this.props.body}
          </CardText>
          <CardActions>
            <FlatButton label={`More by ${this.props.author.first_name} ${this.props.author.last_name}`}/>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CardPostDetail