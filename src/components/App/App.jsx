import React from 'react';
import Home from '../Home/Home.jsx';
import About from '../AboutPage/AboutPage.jsx';
import ScedulePage from '../ScedulePage/ScedulePage.jsx';
import SceduleForm from '../SceduleForm/SceduleForm.jsx';
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
          <About />
        </Route>

        <Route path="/scedule" exact>
          <ScedulePage />
          <SceduleForm />
        </Route>
      </Router>

      
    </div>
  )
}

export default App;
