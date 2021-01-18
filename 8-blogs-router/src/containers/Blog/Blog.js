import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';

import './Blog.css';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                {/* a normal link reloads the page and we don't want to lose the state, because each time our application reloads its previous state is lost */}
                {/* we want to prevent the reloading of the page and let React Router only re-render parts of the dom that needs to be re-rendered */}
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/new-post'>New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/' exact render={() => <h1>Home 2</h1>} /> */}
        <Route path='/' exact component={Posts} />
        {/* remove exact because we want to handle all paths starting with new_post */}
        <Route path='/new-post' component={NewPost} />
      </div>
    );
  }
}

export default Blog;
