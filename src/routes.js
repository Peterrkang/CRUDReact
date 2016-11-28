import React from 'react';
import { Route, IndexRoute } from 'react-router';



import App from './components/app'
import PostsIndex from './components/post_index'
// google.com/ <- "/" root domain => renders app
import PostNew from './components/post_new'
import PostShow from './components/post_show'




export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
);
//this.props.params.id
