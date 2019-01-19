import React from 'react';
import _ from 'lodash';
// import {UpdateMovie} from "./updateMovie"

export class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.movie=this.props.movies;
        this.updateMovie=this.updateMovie.bind(this);
    }
    updateMovie(){
        console.log("thumbnail",this.props.movies)
        this.props.findUpdateMovie(this.props.movies._id,this.props.movies)
    }

    //render method
    render() {
        return (
            
                
                    <div className="row col-sm-6 col-md-4">
                        <div className="thumbnail" >

                            <img src={this.movie.poster} alt="..." height="273px" width="185px" />
                            <div className="caption">
                                <h3>{this.movie.title}</h3>
                                <p>{this.movie.description}</p>
                                <a href={this.movie.trailer}>Movie Trailer</a>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="text text-danger">Rating: {this.movie.rating}</td>
                                            <td className="text text-warning pull-right">Runtime: {this.movie.runtime}</td>
                                        </tr>
                                        <br />
                                        <tr>
                                           <button onClick={this.updateMovie}>Update</button>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            
        
    }
}

Thumbnail.PropTypes={
    title:React.PropTypes.string
}