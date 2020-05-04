import React, {Component} from 'react';
import Post from './Post.js';
            

/*Postlist is in charge of displaying a list of post cards and passing along the select function */
class PostList extends Component{
    state = {
        query:"",
        filteredPosts:[...this.props.postList]
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
        const newPosts = this.props.postList.filter(post => 
            post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
        );

        this.setState({
            query,
            filteredPosts:newPosts,
        });
    }

    render(){                
                
        return(
            <div>
                {/* add searchbar 🔎*/}
                <div style = {myStyles.searchBar}>
                    <p>
                    <span role='img'>🔎</span>
                        <input 
                            style= {myStyles.input} 
                            text= 'text' 
                            placeholder = 'search titles' 
                            onChange = {this.handleChange}
                        />

                    </p>
                </div>
                <div className ='postList'>
                    {this.renderPosts()} 
                </div>
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
    }
}

export default PostList