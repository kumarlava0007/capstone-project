import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import FirstSectionComponent from './components/landingPageComponent/FirstSectionComponent';

function App() {
  return (
    <Router>
      < NavComponent />
      < FirstSectionComponent />
    </Router>
  );
}

export default App;