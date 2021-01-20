import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  // async componentDidMount() {
  //   console.log('from FullPost', this.props);
  //   // Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
  //   // BEWARE OF CREATING INFINITE LOOPS!!!
  //   // this.props.match is available beacause the component is loaded through the Route
  //   if (this.props.match.params.id) {
  //     // if there is no post loaded
  //     // loadedPost is not initially set, so we need the first condition to load it

  //     // if we have a loaded post, but we clicked on another post
  //     // only send the request if we load a new post, otherwise we will send infinite requests, because we update the state in the componentDidUpdate and that will trigger a re-render
  //     // if the post was loaded and the id of the loaded post is not the same with the id we get from props, then send a request to get the new post
  //     if (!this.state.loadedPost ||
  //       (this.state.loadedPost &&
  //         this.state.loadedPost.id !== +this.props.match.params.id)
  //     )
  //       try {
  //         const response = await axios.get(
  //           `/posts/${this.props.match.params.id}`
  //         );
  //         const post = response.data;
  //         this.setState({
  //           loadedPost: post
  //         });
  //         console.log(
  //           typeof this.state.loadedPost.id,
  //           typeof parseInt(this.props.match.params.id)
  //         );
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //   }
  // }

  // componentDidMount is not executed twice, and therefore without componentDidUpdate to check for the id change when we click on another post, it won't re-render
  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    // An example of when to use componentDidUpdate() is when we need to call an external API on condition that the previous state and the current state have changed.
    // The call to the API would be conditional to the state being changed. If there is no state change, no API is called.
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        axios.get('/posts/' + this.props.match.params.id).then((response) => {
          // console.log(response);
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.match.params.id}`)
      .then((response) =>
        console.log('deleted post with id: ', this.props.match.params.id)
      );
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button className='Delete' onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
