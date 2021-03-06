import React from 'react';
import Navigation from '../Navigation';
import HomePage from '../HomePage';
import PortfolioPage from '../PortfolioPage';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <Router basename="/gcm-portfolio">
      <ScrollToTop />
      <div className="App">
        <Navigation />
        {/* <Route exact path='/gcm-portfolio' component={HomePage} /> */}
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/gcm-portfolio/portfolio' component={PortfolioPage} /> */}
        <Route exact path='/portfolio' component={PortfolioPage} />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
