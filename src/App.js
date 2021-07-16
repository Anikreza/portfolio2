
import './App.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import LeftMost from './Components/LeftMost';
import Left from './Components/Left';
import Home from './Components/Home';
import Resume from './Components/Resume';
import {Animated} from "react-animated-css";
import Work from './Components/Work';
import About from './About';

function App() {
  return (
    <div className="App">
           <Router> 
               
             <LeftMost/>     
             <Left/> 
                        
       <Switch>
          <Route path='/portfolio2/' exact component={Home}/>
          <Route path='/about'  component={Home} />
          <Route path='/blog'/>
          <Route path='/resume'component={Resume} />
          <Route path='/contact' />
          <Route path='/ind'/>
          <Route path='/works' component={Work}/>
       </Switch>  
    </Router>  
    </div>
  );
}

export default App;
