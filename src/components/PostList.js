import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {increment} from '../actions';
import Post from './Post.js';

/*Postlist is in charge of displaying a list of post cards */
class PostList extends Component {
  state = {
      query:  "",
      filteredPosts:[...this.props.postList],
      radioValue: "",

  };
  
  //renders the posts to the DOM
  renderPosts = () => {        
      const display = this.state.filteredPosts.map((post) => {
          return (
            <Post 
              post = {post} 
              key = {post.id} 
              onSelect = {this.props.onSelect}
            />
          )
      });
      return display;
  };

  //filters the posts to whatever the current query and radiobox show
  handleChange = () => {
    const query = this.state.query;
    const radio = this.state.radioValue !== '' ? this.state.radioValue : 'title'; 
    console.log('handlechange. query: ', this.state.query,"radio: ",this.state.radioValue);
    let newPosts = [...this.state.filteredPosts];
    switch(radio){
      case 'comments':
        newPosts = this.props.postList.filter(post => {
          let shouldReturn=false;
            post.comments.forEach(elem => { 
              if( elem.text.toLowerCase().indexOf(query.toLowerCase()) >= 0){
                shouldReturn = true;
              } 
            })
            // console.log('return comments',shouldReturn)
            return shouldReturn;
        });
      break;

      case 'categories':
        newPosts = this.props.postList.filter(post => {
          let shouldReturn=false;
            post.categories.forEach(elem => {
              if( elem.toLowerCase().indexOf(query.toLowerCase()) >= 0){
                shouldReturn = true;
              }
            })
            return shouldReturn;
        });
      break;

      default:{
        newPosts = this.props.postList.filter(post => {
        //  console.log('def',post[radio])
          return (
            post[radio].toLowerCase().indexOf(query.toLowerCase()) >= 0
            )
        });
      }
    };
    
    this.setState({
        query,
        filteredPosts:newPosts,
    });
  };

  //updates the state of the radiobox, then calls handlechange
  handleRadiobox = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      radioValue:value
    });
    console.log('handleradiobox. value: ',value,'radiovalue: ', this.state.radioValue)
    this.handleChange();
  };
  
  //updates the state query everytime a letter is changed in the searchbar, then calls handlechange
  updateSearch = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      query:value
    });
    console.log('updatesearch. query: ',this.state.query,'e: ',e.target.value);
    this.handleChange();
  };
  
  //does nothing yet, will impliment with redux
  handleClick = () => {
    this.props.increment(this.props.count);
  };

  render(){                
              
      return(
          <div>
              <div style = {myStyles.searchBar}>
                  <form  onChange = {(e) => this.updateSearch(e)}>
                  <span role='img'>🔎</span>
                      <input 
                          style = {myStyles.input} 
                          text = 'text' 
                          placeholder = 'search titles' 
                      />
                  </form>    
                  <form onClick = {(e) => this.handleRadiobox(e)}>
                  
                  
                    <label >Title</label>
                      <input 
                        name = 'search'
                        style = {myStyles.checkbox}
                        value = 'title'
                        type = "radio"
                      />
                    <br/>
                    
                    <label > Summary</label>
                      <input 
                        name = 'search'
                        style = {myStyles.checkbox}
                        value= 'summary'
                        type = "radio"
                      />
                    <br/>

                    <label >Categories</label>
                      <input 
                        name = 'search'
                        style = {myStyles.checkbox}
                        value = 'categories'
                        type = "radio"
                      />
                    <br/>

                    <label >Rescource Type</label>
                      <input 
                        name = 'search'
                        style = {myStyles.checkbox}
                        value = 'resourceType'
                        type = "radio"
                      />
                    <br/>

                    <label >Skill Level</label>
                      <input 
                        name = 'search'
                        style = {myStyles.checkbox}
                        value = 'jobSkillLevel'
                        type = "radio"
                      />
                    <br/>

                    <label >comments</label>
                      <input 
                        name = 'search'
                        style = {myStyles.checkbox}
                        value = 'comments'
                        type = "radio"
                      />
                    <br/>
                  </form>
                  <br />
                  
              </div>
              <div className = 'postList'>
                  {this.renderPosts()} 
              </div>

              {/* <div className='footer'>
                <button onClick={this.handleClick}>increase</button>
                <p>this.props.count</p>
              </div> */}

          </div>
      )

  }
}


const myStyles = {
    searchBar: {
        flex: 1,
        flexDirection:'row',
        marginLeft:'30%',
        marginRight:'30%',
        margrinBottom:'32px',
        

    },
    input: {
        width: "70%",
        height: 32,
        fontSize: 20,
        margrinBottom: 4,
    },
    checkbox:{
      opacity:'100%',
    }
}

// const mapStoreToProps = store => {
//   return {
//     count:store.posts.count,
//   }
// }

// export default connect(mapStoreToProps, {
//   increment: increment
// })(PostList);

export default PostList;