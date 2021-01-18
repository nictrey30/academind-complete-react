import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import instance from '../../../axios';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const response = await instance.get('/posts');
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => ({ ...post, author: 'Max' }));
      this.setState({ posts: updatedPosts });
    } catch (error) {
      console.log(`Error: ${error.message}`);
      // this.setState({ error: true });
    }
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    // array of jsx elements

    posts = this.state.posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
      />
    ));

    return <section className='Posts'>{posts}</section>;
  }
}

export default Posts;
