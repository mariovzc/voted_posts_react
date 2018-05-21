import React, { Component } from 'react'
import { 
  Container,
  Row,
  Col
} from 'reactstrap'
import posts from './posts'
import PostItem from './components/posts/PostItem'
import Order from './order'

class App extends Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      order: 'ASC'
    }
  }
  vote (id, upVote) {
    const vote = upVote === 1 ? 1 : -1
    let newArr = this.state.posts.map(post => post.id === id ?  {...post, votes: post.votes+=vote} : post )
    this.setState({
      posts: newArr
    })
  }
  render () {
    return (
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h1 className='text-center'>Blog posts populares</h1>
            <hr />
            {this.state.posts.map(post => {
              return (
                <PostItem
                  key={post.id}
                  id={post.id}
                  post_image_url={post.post_image_url}
                  votes={post.votes}
                  url={post.url}
                  title={post.title}
                  description={post.description}
                  writer_avatar_url={post.writer_avatar_url}
                  upVote={() => this.vote(post.id, 1)}
                  downVote={() => this.vote(post.id, -1)}
                />
              )
            })}
          </Col>          
        </Row>
      </Container>
    );
  }
  componentWillMount() {
    this.setState({
      posts: posts
    })
  }
}

export default App;