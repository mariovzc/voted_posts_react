import React, { Component } from 'react';
import posts from './posts'
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
        {this.state.posts.map(post => {
          return post.id
        })}
        <hr/>
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
