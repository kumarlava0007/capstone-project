import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import FirstSectionComponent from "./components/landingPageComponent/FirstSectionComponent";
<<<<<<< HEAD
import icon from "./images/AasaanPremiumLogo.png";
=======
>>>>>>> main

function App() {
  document.title = "Aasaan Premium";
  document.icon = {icon};
  return (
<<<<<<< HEAD
      <Router>
        <NavComponent />
        <FirstSectionComponent />
      </Router>
    
=======
    <Router>
      <NavComponent />
      <FirstSectionComponent />
    </Router>
>>>>>>> main
  );
}

export default App;
