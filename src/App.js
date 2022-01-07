
import './Styles/App.css';
import React from 'react'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import SideBar from './Components/sideBar';
import PersonInfo from './Components/PersonInfo';
import Home from './Components/Home';
import Resume from './Components/Resume/Resume';
import {Animated} from "react-animated-css";
import Work from './Components/Work/Work';
import Contact from './Components/Contact';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App">
           <Router> 
               
             <SideBar/>
             <PersonInfo/>
                       
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
