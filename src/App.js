import React from 'react';
import './App.css';

import {NavBarComponent, HomeComponent, AboutMeComponent, EducationUComponent, EducationOComponent,
   ProjectComponent, SideBarComponent, ContactComponent} from './Components/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 

function App() {
  return (
    <Router>
    <div className="App">
    <header> <NavBarComponent /> </header>
      <div className="App_body">   
      {/* <header> <NavBarComponent /> </header> */}
      {/* <div><NavBarComponent /></div> */}
      <div className="sideBar"> <SideBarComponent /></div>
      <div className="mainContainer">  
      {/* <Route exact path='/my-portfolio'> <ContactComponent /></Route>        */}
      <Route exact path='/my-portfolio'><HomeComponent /></Route>  
      <Route path='/my-portfolio/AboutMe'><AboutMeComponent /></Route>
      <Route path='/my-portfolio/EducationUniversity'><EducationUComponent /></Route>
      <Route path='/my-portfolio/EducationOnline'><EducationOComponent /></Route>
      <Route path='/my-portfolio/Projects'><ProjectComponent /></Route>
      <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
      </div> 
      </div>
      
      </div>
     
      </div>
 
    </Router>
  );
}


// function App() {
//   return (
//     <Router>
//     <div className="App">
//      <header> <NavBarComponent /> </header>
//       <div className="App_body">   
//       <div className="sideBar"> <SideBarComponent /></div>
//       <Switch>
//       <div className="mainContainer">  
      
//      <div class="arrow">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//       </div> 
//       <HomeComponent />
//       <AboutMeComponent/>
//       <ProjectComponent/>
//       <ContactComponent/>
//       {/* <Route exact path='/my-portfolio'> <ContactComponent /></Route>        */}
//       {/* <Route exact path='/my-portfolio' component={HomeComponent}/>   */}
//       {/* <Route path='/my-portfolio/AboutMe' component={AboutMeComponent} /> */}
//       {/* <Route path='/my-portfolio/EducationUniversity'><EducationUComponent /></Route>
//       <Route path='/my-portfolio/EducationOnline'><EducationOComponent /></Route> */}
//       {/* <Route path='/my-portfolio/Projects' component={ProjectComponent} /> */}
      
//       </div>
//       </Switch>
//       </div>
     
//       </div>
 
//     </Router>
//   );
// }

export default App;
