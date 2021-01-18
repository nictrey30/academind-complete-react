import React, { Component } from 'react';
// import axios from 'axios';
import instance from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    // handling errors locally
    error: false
  };
  async componentDidMount() {
    try {
      const response = await instance.get('/posts');
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => ({ ...post, author: 'Max' }));
      this.setState({ posts: updatedPosts });
    } catch (error) {
      // console.log(`Error: ${error.message}`);
      this.setState({ error: true });
    }
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    // array of jsx elements
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));
    }
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className='Posts'>{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
