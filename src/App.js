import React, { Component } from 'react';
import posts from './posts'
import PostItem from './components/PostItem';
let myPosts = []
class App extends Component {
  constructor () {
    super()
    this.state= {
      posts: [],
      order: 'ASC'
    }
  }
  vote (id, upVote) {
    const vote = upVote ? 1 : -1
    const newArr = myPosts.map(post => post.id === id ? 
      {...post, votes: post.votes+=vote} :
      post
    )
  }
  render() {
    return (
      <div className="App">  
        <h1>Blog posts populares</h1>
        <hr/>
        <div>
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
                vote={this.vote}
              />
            )
          })}
        </div>
      </div>
    );
  }
  componentWillMount() {
    this.setState({
      posts: posts
    })
    myPosts = posts
  }
}

export default App;