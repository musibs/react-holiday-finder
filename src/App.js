import React from 'react';
import Index from './components/Index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Country from './components/Country';
import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:code" component={Country} /> 
      </Switch>
    </Router>  
  )
  
}

export default App;
