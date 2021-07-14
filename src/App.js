
import './App.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import LeftMost from './Components/LeftMost';
import Left from './Components/Left';
import Home from './Components/Home';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
           <Router> 
             <LeftMost/>     
             <Left/>                
       <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home'  component={Home} />
          <Route path='/about'/>
          <Route path='/resume'component={Resume} />
          <Route path='/contact' />
          <Route path='/works'/>
       </Switch>  
    </Router>  
    </div>
  );
}

export default App;
