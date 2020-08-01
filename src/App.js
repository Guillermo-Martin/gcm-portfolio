import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/portfolio' component={PortfolioPage} />
      </div>
    </Router>
    
  );
}

export default App;
