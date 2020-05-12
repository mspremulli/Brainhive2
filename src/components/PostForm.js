import React, { Component } from "react";
import Button from './common/Button.js';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeForm, submitForm} from '../actions';
import {withRouter} from 'react-router-dom';

const INITIAL_STATE = {
  id: 0,
  posterName: "",
  resourceAuthor: "",
  jobSkillLevel: "",
  cohort: "",
  title: "",
  categories: "",
  summary: "",
  link: "",
  resourceType: "",
  datePublished: "",
  videoLength: "",
  timeToComplete: "",
  rating: "",
  comments:[]
}

class PostForm extends Component {

  
  state = {...INITIAL_STATE};

  handleChange = (e) => {
    // this.setState({
    //   ...this.state,
    //   [e.target.id]: e.target.value,
    // });
    this.props.changeForm(e.target.id,e.target.value);
  };

  handleSubmit = (e) => {
    //add form validation
    // e.preventDefault();
    // const postData = {...this.state}
    // postData.categories = postData.categories.split(',');
    // this.props.addPost(postData);
    // this.setState = {...INITIAL_STATE};
    this.props.submitForm(this.props.newPost.form);
  }


  render() {
    const {form} = this.props.newPost;
    return (
      <div>
        <form style={myStyles.form} >
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            type="text"
            id="posterName"
            placeholder="Your Name"
            value={form.posterName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="resourceAuthor"
            placeholder="Author Name"
            value={form.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div>
            <select id = 'jobSkillLevel'
                value = {form.jobSkillLevel}
                onChange = {(e) => this.handleChange(e)}
            >
              <option value="" disabled>
                Author skill level
              </option>
              <option value="Intro">Intro</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <input
            type="text"
            id="cohort"
            placeholder="Cohort #"
            value={form.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="title"
            placeholder="title"
            value={form.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="categories"
            placeholder="Categories (seperate multiple with commas)"
            value={form.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="link"
            placeholder="Resource Link"
            value={form.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="resourceType"
            placeholder="Resource Type"
            value={form.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="date"
            id="datePublished"
            placeholder="Published Date"
            value={form.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="videoLength"
            placeholder="Length of Video (optional)"
            value={form.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="timeToComplete"
            placeholder="Time to complete resource"
            value={form.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="rating"
            placeholder="1 to 5 rating"
            value={form.rating}
            onChange={(e) => this.handleChange(e)}
          />

          <Link to ='/' onClick = {(e) => this.handleSubmit(e)}>
            <Button type = "submit">Submit</Button>
          </Link>

        </form>
      </div>
    );
  }
}
const myStyles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const mapStoreToProps = (store) =>{
  return{
    newPost:store.newPost
  }
}

export default connect(mapStoreToProps,{
  changeForm,
  submitForm
})(withRouter(PostForm));