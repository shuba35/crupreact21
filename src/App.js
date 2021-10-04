import './App.css';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash , faEdit , faEye} from '@fortawesome/free-solid-svg-icons';
import Welcome from './Welcome';

library.add(faTrash,faEdit,faEye);

function App() {

return (   
      <div className="main">
        <Welcome></Welcome>
      </div>   
      ); 
  }
export default App;