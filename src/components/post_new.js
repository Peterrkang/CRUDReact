import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };


  onSubmit(props){
    //props from form
    this.props.createPost(props)
      .then(() => {
        //blog post has been created, navigate to index
        //navigate by calling this.context.router.push w/ new path
        this.context.router.push('/')
      });

  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="form-control-label">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="form-control-label">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="form-control-label">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );

  }
}

//connect: first arguemnt is mapstatetoprops, 2nd is mapdispatchtoprops
//reduxForm: first is form config, 2nd is mapstate to props, 3rd is mapdispatch to props

function validate(values) {

  const errors = {};

  if(!values.title){
    errors.title = 'Enter a title';
  }
  if(!values.categories){
    errors.categories = 'Enter categories';
  }
  if(!values.content){
    errors.content = 'Enter some content';
  }

  return errors;

}


export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);

//user types somehting in.. record it on application state
//state == {
//  form:
/*    PostsNewForm:{
      title: ''
      categories: ''
      content: ''
      }


}*/
