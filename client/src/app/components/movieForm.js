import React from 'react';
import _ from 'lodash';

export class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.addMovie=this.addMovie.bind(this)
    }

    addMovie(){
        var newMovie={
            title: this.refs.title.value,
            runtime: this.refs.runtime.value,
            genre: this.refs.genre.value
        }
        console.log(this.refs.title.value)
        this.props.addMovie(newMovie)
    }

  
    //render method
    render() {
        return (
            <div>
                
                <input type="text" ref='title' value={this.props.data.title}placeholder="title"/>
                <input type="text" ref='runtime' value={this.props.data.runtime} placeholder="runtime"/>
                <input type="text" ref='genre' value={this.props.data.genre} placeholder="genre"/>
                <button  onClick={this.addMovie}>Add new Movie</button>
                
            </div>
        )
    }
}

//