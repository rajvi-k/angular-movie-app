import React from 'react';
import  axios from "axios";
import  {AdminDelete} from "./adminDelete";

export class MovieComponent extends React.Component {
    constructor(props){
        super(props);
        this.renderAdmin=this.renderAdmin.bind(this)
        this.renderUser=this.renderUser.bind(this)
        this.renderDelete=this.renderDelete.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.delete=""
        
    }
    handleDelete=()=>{
        this.props.handleDelete();
        
    }
    renderDelete=()=>{
        console.log("Entered render delete")
    }
    renderAdmin(){
        console.log("Entered admin")
        
        return (
            
            <div className="container-fluid">
                <div className="rows" id="cont">
                
                        {this.props.movieDetails.map((movie, index) =>
                            <div className="row col-sm-6 col-md-4">
                                <div className="thumbnail" >

                                    <img src={movie.poster} alt="..." height="273px" width="185px" />
                                    <div className="caption">
                                        <h3>{movie.title}</h3>
                                        <p>{movie.description}</p>
                                        <a href={movie.trailer}>Movie Trailer</a>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="text text-danger">Rating: {movie.rating}</td>
                                                    <td className="text text-warning pull-right">Runtime: {movie.runtime}</td>
                                                </tr>
                                                <br/>
                                                <tr>
                                                <td><a href="#" className="btn btn-primary" role="button">Update</a> </td>
                                                <td><a href="#" className="btn btn-default pull-right" role="button" onClick={this.handleDelete}>Delete</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
    renderUser(){
        console.log("entered user fn")
        return (
            <div className="container-fluid">
                <div className="rows" id="cont">
                        {this.props.movieDetails.map((movie, index) =>
                            <div className="row col-sm-6 col-md-4">
                                <div className="thumbnail" >
                                    <img src={movie.poster} alt="..." height="273px" width="185px" />
                                    <div className="caption">
                                        <h3>{movie.title}</h3>
                                        <p>{movie.description}</p>
                                        <a href={movie.trailer}>Movie Trailer</a>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="text text-danger">Rating: {movie.rating}</td>
                                                    <td className="text text-warning pull-right">Runtime: {movie.runtime}</td>
                                                </tr>
                                                <br/>
                                                <tr>
                                                    <td><a href="#" className="btn btn-primary pull-left" role="button">Buy</a> </td>
                                                    <td style={{paddingLeft:'10px'}}><a href="#" className="btn btn-default pull-right" role="button">View Reviews</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
    render() {
        var role="Admin";
        //console.log(this.props.movieDetails)
        if(role==="Admin"){
               {console.log("Entered adminrender")}
               
            
               return (<div>{this.renderAdmin()}</div>
            );
        }
        else if(role==="User"){
            return (<div>{this.renderUser}</div>);
        }
        else    {
            return (
                <h4> Please Login </h4>
            )
        }
    }
}


