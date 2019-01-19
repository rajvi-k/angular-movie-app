import React from 'react';
import { MovieForm } from './movieForm';
import { ViewMovies } from './viewMovies';
import axios from 'axios';

export class MovieApp extends React.Component {
    constructor() {
        super();
        this.allMovies = this.handleAllMovies.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.findUpdateMovie=this.findUpdateMovie.bind(this);
        this.am={title:"",runtime:"",genre:""}
        
        this.state = {
            movies: []
        }
    }
    handleAllMovies = () => {
        axios.get("http://localhost:4000/api/movies")
            .then((result) => {
                this.setState({
                    movies: result.data
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    addMovie(movie) {
        axios.post("http://localhost:4000/api/movies", movie).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
        this.componentDidMount();
    }


    deleteBookMark() {

    }
      
    findUpdateMovie=(id, movie) =><MovieForm data={movie} />

    //Show page on load
    componentDidMount() {
        this.setState({
            movies: this.movies
        })
    }

    //render method
    render() {
        return (
            <div>

                <MovieForm addMovie={this.addMovie} data={this.am} />
                {this.allMovies()}
                <ViewMovies movies={this.state.movies} findUpdateMovie={this.props.findUpdateMovie}/>
            </div>
        )
    }
}
/* 
            
  */