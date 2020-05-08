import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {increment} from '../actions';
import Post from './Post.js';
            

/*Postlist is in charge of displaying a list of post cards and passing along the select function */
class PostList extends Component{
  state = {
      query:"",
      filteredPosts:[...this.props.postList],
      radioValue:''

      
  }
      
  renderPosts = () => {        
      const display = this.state.filteredPosts.map((post) => {

          return (
            <Post 
            post = {post} 
            key = {post.id} 
            onSelect = {this.props.onSelect}/>
          )
      });
      return display;
  }

  handleChange = (e) => {
      const query = e.target.value;
      const radio = this.state.radioValue !== '' ? this.state.radioValue : 'title'; 
      let newPosts = [...this.state.filteredPosts];

      // console.log('query', query);
      // console.log('radio',radio,this.props.postList[0][radio]);


      switch(radio){
        case 'comments':{
          // console.log('categ')
          newPosts = this.props.postList.filter(post => {
            let shouldReturn=false;
            
              post.comments.forEach(elem => {
                // console.log("e",elem.text);
                
               if( elem.text.toLowerCase().indexOf(query.toLowerCase()) >= 0){
                 shouldReturn = true;
               }
                
              })
              // console.log('return comments',shouldReturn)
              return shouldReturn;
           
          });
        }
        break;

        case 'categories':{
          newPosts = this.props.postList.filter(post => {
            let shouldReturn=false;
            
              post.categories.forEach(elem => {
               
               if( elem.toLowerCase().indexOf(query.toLowerCase()) >= 0){
                 shouldReturn = true;
               }
                
              })
              
              return shouldReturn;
           
          });
        }
        break;

        default:{
         newPosts = this.props.postList.filter(post => {
          //  console.log('def',post[radio])
            return (
              post[radio].toLowerCase().indexOf(query.toLowerCase()) >= 0
              )
          });
        }
      }
      

      this.setState({
          query,
          filteredPosts:newPosts,
      });
  }

  
  handleRadiobox = (e) => {
    const value = e.target.value;
    // console.log('value',value)
    
    this.setState({
      radioValue:value
    })
    // console.log('property', this.state.radioValue)
    
    
  }
  
  handleClick = () => {
    this.props.increment(this.props.count);
  }

  render(){                
              
      return(
          <div>
              <div style = {myStyles.searchBar}>
                  <form  onChange = {this.handleChange}>
                  <span role='img'>🔎</span>
                      <input 
                          style = {myStyles.input} 
                          text = 'text' 
                          placeholder = 'search titles' 
                      />
                      <form onChange = {(e) => this.handleRadiobox(e)}>
                      
                      
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
                  </form>
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