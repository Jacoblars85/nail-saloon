import React from 'react';
import Home from '../Home/Home.jsx';
import './App.css';

function App (){
  return(
    <div className="App">
      
      <h1 className="App-header">Nail Saloon</h1>

      <Router>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <Details />
        </Route>
      </Router>

      
    </div>
  )
}

export default App;
