import React, {Component} from 'react'
/**
 * POST ITEM PROPS
  id,
  title,
  description,
  url,
  votes,
  writer_avatar_url,
  post_image_url
 */
class PostItem extends Component {
  render () {
    return (
      <div>
        <div>
          <img 
            src={this.props.post_image_url}
            alt={this.props.title}
          />
        </div>
        <div>
          <button onClick={() => this.props.vote(this.props.id, true)}>UpVote</button>
          <span>{this.props.votes}</span>
          <button onClick={() => this.props.vote(this.props.id, false)}>DownVote</button>
        </div>
        <div>
          <h3><a href={this.url} target='_blank'>{this.props.title}</a></h3>
          <p>{this.props.description}</p>
          <small>
            Escrito por: 
            <img 
              src={this.props.writer_avatar_url}
              alt='AVATAR'
             />
          </small>
        </div>
      </div>
    )
  }
}
export default PostItem