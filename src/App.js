import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import posts from './posts'
import PostItem from './components/posts/PostItem'
import order from './order'
import OrderButtons from './components/order_buttons/OrderButtons'
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
    newArr = this._order(this.state.order, this.state.posts)
    this.setState({
      posts: newArr
    })
  }
  setOrder (postsOrder) {
    let newArr = this._order(postsOrder, this.state.posts)
    console.log(postsOrder)
    this.setState({
      posts: newArr,
      order: postsOrder
    })
  }
  _order (value, arr) {
    return value === 'ASC' ? order.ascArray(arr) : order.descArray(arr)
  }
  render () {
    return (
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h1 className='text-center'>Blog posts populares</h1>
            <hr />
            <OrderButtons
              ascOrder={() => this.setOrder('ASC')}
              descOrder={() => this.setOrder('DESC')}
              status={this.state.order}
            />
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