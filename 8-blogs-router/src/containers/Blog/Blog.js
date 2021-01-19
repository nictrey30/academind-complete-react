import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

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
                {/* by default React treats the path as a prefix */}
                <NavLink
                  to='/'
                  exact
                  // activeClassName='my-active'
                  // activeStyle={{
                  //   color: '#439533',
                  //   textDecoration: 'underline'
                  // }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/* 
                pathname: A string representing the path to link to.
                search: A string representation of query parameters. 
                hash: A hash to put in the URL, e.g. #a-hash. 
                state: State to persist to the location. 
                */}
                <NavLink
                  to={{
                    pathname: '/new-post',
                    // we can add a hash after the url to jump to that pointthat comes after the hash
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/' exact render={() => <h1>Home 2</h1>} /> */}
        <Route path='/' exact component={Posts} />
        {/* the first route that matches a given path will be loaded */}
        <Switch>
          {/* remove exact because we want to handle all paths starting with new_post */}
          <Route path='/new-post' component={NewPost} />
          <Route path='/:id' exact component={FullPost} />
          {/* The Routes are passed top to bottom, and the /new-post is parsed first, although it could be interpreted as another /:id route */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
