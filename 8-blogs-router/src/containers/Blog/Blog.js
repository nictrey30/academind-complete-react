import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

// importing for lazy
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
  // dynamic import sintax for import, meaning whatever comes between the () is only imported when the anonymus function is executed, and that happens once we render AsyncNewPost to the screen
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  };
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
                  to='/posts/'
                  exact
                  // activeClassName='my-active'
                  // activeStyle={{
                  //   color: '#439533',
                  //   textDecoration: 'underline'
                  // }}
                >
                  Posts
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
                    // we can add a hash after the url to jump to that point that comes after the hash
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
        {/* the first route that matches a given path will be loaded */}
        {/* remove exact because we want to handle all paths starting with new_post */}
        {/* The Routes are passed top to bottom, and the /new-post is parsed first, although it could be interpreted as another /:id route */}
        <Switch>
          {this.state.auth ? (
            <Route path='/new-post' component={AsyncNewPost} />
          ) : null}
          <Route path='/posts/' component={Posts} />
          {/* if we use Redirect outside the Switch, 'from' can't be specified */}
          <Redirect from='/' to='/posts/' />
          {/* catch all rule, should be the last. <Route render={() => <h1>not found</h1>} */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
