import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/projects' component={ProjectsPage} />
      </div>
    </Router>
    
  );
}

export default App;
