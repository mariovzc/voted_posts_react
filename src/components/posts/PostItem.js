import React, {Component} from 'react'
import { Row, Col } from 'reactstrap'
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './post.css'
/**
 * POST ITEM PROPS
  id,
  title,
  description,
  url,
  upVote,
  downVote,
  writer_avatar_url,
  post_image_url
 */
class PostItem extends Component {
  render () {
    return (
      <Row className='post-container'>
        <Col xs='3'>
          <img
            src={this.props.post_image_url}
            alt={this.props.title}
            width='100%'
            className='img-thumbnail no-padding'
          />
        </Col>
        <Col xs='2' className='text-center'>
          <button
            className='btn btn-link'
            onClick={() => this.props.upVote(this.props.id, true)}
          >
            <MaterialIcon icon='thumb_up' color={colorPallet.lightBlue._500} />
          </button>
          <br />
          <span>{this.props.votes}</span>
          <br />
          <button
            onClick={() => this.props.downVote(this.props.id, false)}
            className='btn btn-link'
          >
            <MaterialIcon icon='thumb_down' color={colorPallet.red._500} />
          </button>
        </Col>
        <Col xs='7'>
          <h4 className='text-primary'>
            <a href={this.props.url} target='_blank'>
              {this.props.title}
            </a>
          </h4>
          <p>{this.props.description}</p>
          <small className='text-muted'>
            Escrito por:
            <img
              src={this.props.writer_avatar_url}
              alt='AVATAR'
              className='img-thumbnail rounded-circle avatar-image no-padding'
            />
          </small>
        </Col>
      </Row>
    )
  }
}
export default PostItem
