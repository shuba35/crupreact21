import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import React from 'react';
import View from './Components/View';

export default function Welcome() {
     
    return (
      <Router>
        <div className="main">
          <h2 className="main-header">React Crud Operations </h2>         
          
          <div>              
            <Link to="/create"><Button type="button"> ADD </Button></Link>                 
           <Route exact path='/create' component={Create} />
          </div>
          <div style={{ marginTop: 20 }}>
            <Route exact path='/read' component={Read} />
          </div>
          <div style={{ marginTop: 20 }}>
            <Route exact path='/View' component={View} />
          </div>
          <div style={{ marginTop: 20 }}>
          <Route path='/update' component={Update} />
          </div>
         
        </div>
       
      </Router>
    );
}