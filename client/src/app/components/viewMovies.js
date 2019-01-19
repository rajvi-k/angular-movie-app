import React from 'react';
import {Thumbnail} from './thumbnail';

export class ViewMovies extends React.Component{
    constructor(props){
        super(props);
        this.listMovie=this.listMovie.bind(this);
        this.movies=this.props.movies;
    }
    listMovie(){
        return _.map(this.props.movies,(movie)=>
            <Thumbnail  findUpdateMovie={this.props.findUpdateMovie} movies={movie} key={movie.title}/>
        )
    }

    //render method
    render(){
        return(
            <div className="container-fluid">
                <div className="rows" id="cont">
                    
                    {this.listMovie()}
                </div>
            </div>
        )
    }
}
