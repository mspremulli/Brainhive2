import React, { Component } from "react";
import Button from './common/Button.js';
import {Link} from 'react-router-dom';
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
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    //add form validation
    // e.preventDefault();
    const postData = {...this.state}
    postData.categories = postData.categories.split(',');
    this.props.addPost(postData);
    this.setState = {...INITIAL_STATE};

    
  }


  render() {
    return (
      <div>
        <form style={myStyles.form} >
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            type="text"
            id="posterName"
            placeholder="Your Name"
            value={this.state.posterName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="resourceAuthor"
            placeholder="Author Name"
            value={this.state.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div>
            <select id = 'jobSkillLevel'
                value = {this.state.jobSkillLevel}
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
            value={this.state.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="title"
            placeholder="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="categories"
            placeholder="Categories (seperate multiple with commas)"
            value={this.state.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="link"
            placeholder="Resource Link"
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="resourceType"
            placeholder="Resource Type"
            value={this.state.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="date"
            id="datePublished"
            placeholder="Published Date"
            value={this.state.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="videoLength"
            placeholder="Length of Video (optional)"
            value={this.state.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="timeToComplete"
            placeholder="Time to complete resource"
            value={this.state.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="rating"
            placeholder="1 to 5 rating"
            value={this.state.rating}
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
export default withRouter(PostForm);