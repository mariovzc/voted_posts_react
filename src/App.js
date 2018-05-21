import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import posts from './posts'
import PostItem from './components/posts/PostItem'
import order from './order'

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
  setOrder (event, arr, input = true) {
    const postsOrder = input ? event.target.value : event
    let newArr = this._order(postsOrder, this.state.posts)
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
            <div className='text-center'>
              <div className='btn-group btn-group-toggle' onChange={this.setOrder.bind(this)} data-toggle='buttons'>
                <label className={this.state.order === 'ASC' ? 'btn btn btn-primary active' : 'btn btn-outline-primary'}>
                  <input type='radio' value='ASC' name='order' /> Ascendente
                </label>
                <label className={this.state.order === 'DESC' ? 'btn btn btn-primary active' : 'btn btn-outline-primary'}>
                  <input type='radio' value='DESC' name='order' /> Descendente
                </label>
              </div>
            </div>
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