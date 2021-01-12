import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => ({ ...post, author: 'Max' }));
      this.setState({ posts: updatedPosts });
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    // array of jsx elements
    const posts = this.state.posts.map((post) => (
      <Post key={post.id} title={post.title} author={post.author} />
    ));
    return (
      <div>
        <section className='Posts'>{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
