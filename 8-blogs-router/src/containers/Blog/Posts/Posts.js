import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import instance from '../../../axios';
import './Posts.css';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    // console.log(this.props);
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
    // push a new page to the stack of pages
    // navigating programatically, mostly used after a given  operation has finished
    this.props.history.push({ pathname: '/posts/' + id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    // array of jsx elements

    posts = this.state.posts.map((post) => {
      return (
        // pass route parameters to each post
        // <Link to={'/posts/' + post.id} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
        // </Link>
      );
    });
    return (
      <div>
        <section className='Posts'>{posts}</section>;
        {/* this is a nested Route */}
        {/* when we click on a single Post, and the url changes to /:id we are never going to reach the / path because the Posts component are rendered in the Blog component only on exact, so we need to remove exact from <Route path='/' exact component={Posts} /> in the Blog component*/}
        {/* <Route path='/posts/:id' exact component={FullPost} />; */}
        <Route
          path={this.props.match.url + '/:id'}
          exact
          component={FullPost}
        />
        ;{/* this.props.match.url -> the url we loaded as far */}
      </div>
    );
  }
}

export default Posts;
