import React from 'react';
import './App.css';

import {NavBarComponent, HomeComponent, AboutMeComponent, EducationUComponent, EducationOComponent,
   ProjectComponent, SideBarComponent} from './Components/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <header> <NavBarComponent /> </header>
      <div className="App_body">   
    <div className="sideBar"> <SideBarComponent /></div>
     <div className="mainContainer">
        {/* <div className="contactBox">
        <Route exact path='/my-portfolio'> <ContactComponent /></Route>
          </div>      */}
      <Route exact path='/my-portfolio'><HomeComponent /></Route>  
      <Route path='/my-portfolio/AboutMe'><AboutMeComponent /></Route>
      <Route path='/my-portfolio/EducationUniversity'><EducationUComponent /></Route>
      <Route path='/my-portfolio/EducationOnline'><EducationOComponent /></Route>
      <Route path='/my-portfolio/Projects'><ProjectComponent /></Route>
      </div>
      </div>
      </div>
 
    </Router>
  );
}

export default App;
