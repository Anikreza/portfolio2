
import './App.css';
import React from 'react'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import LeftMost from './Components/LeftMost';
import Left from './Components/Left';
import Home from './Components/Home';
import Resume from './Components/Resume';
import {Animated} from "react-animated-css";
import Work from './Components/Work';
import Contact from './Components/Contact';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
           <Router> 
               
             <LeftMost/>     
             <Left/> 
                        
       <Switch>
          <Route path='/portfolio2/' exact component={Home}/>
          <Route path='/about'  component={Home} />
          <Route path='/Blog' component={Blog}/>
          <Route path='/resume'component={Resume} />
          <Route path='/contact' component={Contact} />
          <Route path='/works' component={Work}/>
       </Switch>  
    </Router>  
    </div>
  );
}

export default App;
