import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
                {/* we want to prevent the reloading of the page and let React Router only re-render parts of the dom that needs to be re-rendered, so we need to use Link */}
                <Link to='/'>Home</Link>
              </li>
              <li>
                {/* 
                pathname: A string representing the path to link to.
                search: A string representation of query parameters. 
                hash: A hash to put in the URL, e.g. #a-hash. 
                state: State to persist to the location. 
                */}
                <Link
                  to={{
                    pathname: '/new-post',
                    // we can add a hash after the url to jump to that pointthat comes after the hash
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New Post
                </Link>
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