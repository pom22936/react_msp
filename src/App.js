import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import home from '../src/pages/Home'
import incident from '../src/pages/Incident'
import dashincident from '../src/pages/Dash_incident'
import notfound from '../src/pages/NotFound'

//import component
import Sidebar from '../src/components/Sidebar'

function App() {
  return (
    <div className="App">

      <Router>
      <Sidebar>
        <Switch>
         
            <Route exact path="/" component={home} />
            <Route path="/incident" component={incident} />
            <Route path="/dashboardincident" component={dashincident} />
            <Route path='*' component={notfound} />
          
          
        </Switch>
        </Sidebar>
      </Router>

    </div>
  );
}

export default App;
