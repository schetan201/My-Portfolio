import React from 'react';
import './App.css';
import {NavBarComponent, HomeComponent, AboutMeComponent, EducationUComponent, EducationOComponent,
   ProjectComponent, ContactComponent} from './Components/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <header> <NavBarComponent /> </header>
      <div className="App_body">
        <div className="profileImage"></div>
        <div className="contactBox">
            <ContactComponent />
          </div>
      <Route exact path='/'><HomeComponent /></Route>
      <Route path='/AboutMe'><AboutMeComponent /></Route>
      <Route path='/EducationUniversity'><EducationUComponent /></Route>
      <Route path='/EducationOnline'><EducationOComponent /></Route>
      <Route path='/Projects'><ProjectComponent /></Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
