import React, {Component} from 'react';
import '../App.css';

class Search extends Component{
    constructor(props){
        super(props);
    }
    ButtonClick() {
        console.log('click of the button');
      }
    
    render (){
        return(
            <div>
            <input placeholder="Search movies"></input>
            <button onClick={this.ButtonClick}> Search </button>


            </div>
        )
    }
}
export default Search