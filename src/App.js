import React, { Component } from 'react';
import posts from './posts'
import PostItem from './components/PostItem';

class App extends Component {
  constructor () {
    super()
    this.state= {
      posts: [],
      order: 'ASC'
    }
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
                post_image_url={post.post_image_url}
                votes={post.votes}
                url={post.url}
                title={post.title}
                description={post.description}
                writer_avatar_url={post.writer_avatar_url}
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
  }
}

export default App;