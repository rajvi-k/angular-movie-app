import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MovieApp} from './components/movieApp';

class App extends React.Component{
   
    render(){
        return(            
            <MovieApp/>
        )
    }
}

render(<App/>,document.getElementById('app'))
/*<Router>
            <div>
                
                <Route exact path="/" />
                <Route exact path="/login" />
                <Route exact path='/movies' component={MovieApp}/>
            </div>
        </Router>*/