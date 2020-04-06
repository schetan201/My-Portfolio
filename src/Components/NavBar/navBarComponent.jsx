import React from 'react';
import "./navBarStyle.scss";
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { ContactComponent } from '../index';

export class NavBarComponent extends React.Component{
constructor(props){
  super(props);
  this.state = this.handleSubmit;
}
  handleSubmit = () => {

        return <ContactComponent />;
    
    }
       render(){
        return  <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <NavLink exact to="/my-portfolio" > Chetan </NavLink>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink exact to="/my-portfolio" > Home </NavLink></Nav.Link>
            <Nav.Link><NavLink to="/my-portfolio/AboutMe" > About Me </NavLink></Nav.Link>
            <NavDropdown title="Education" id="basic-nav-dropdown">
              <NavDropdown.Item ><NavLink to="/my-portfolio/EducationUniversity" > University </NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/my-portfolio/EducationOnline" > Online Courses </NavLink></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><NavLink to="/my-portfolio/Projects" > Projects </NavLink></Nav.Link>
            </Nav>
            <Nav.Link href="https://github.com/chetan-shirsath" target="_blank"> <i className="fa fa-github fa-fa-github-custom"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/chetan-shirsath" target="_blank"> <i className="fa fa-linkedin-square fa-fa-linkedin-square-custom"></i></Nav.Link>
            <Nav.Link href="skype://shirsath.c@husky.neu.edu?call" target="_blank"> <i className="fa fa-skype fa-fa-skype-custom"></i></Nav.Link>
            <Nav.Link href="tel://+14144397164" target="_blank"> <i className="fa fa-phone-square fa-fa-phone-square-custom"></i></Nav.Link>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
        }
}