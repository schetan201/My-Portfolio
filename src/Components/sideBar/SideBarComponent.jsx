/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './SidebarStyle.scss';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import { MDBMask, MDBView, MDBRow, MDBCol } from 'mdbreact';

export class SideBarComponent extends React.Component{
  render() {
    return <div className="side">
     <div className="card maindiv" >
   {/* <div className="imgdiv">  */}
    {/* <div className="backImg">
     <div className="rounded-circle rounded-circle-imgdiv zoom">
       </div>
       </div> */}
       {/* </div> */}
    <div className="card-body">
        <a className="zoom" href="https://github.com/chetan-shirsath" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github fa-fa-github-custom bodydata"></i></a>
        <a className="zoom" href="https://www.linkedin.com/in/chetan-shirsath" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin-square fa-fa-linkedin-square-custom bodydata"></i></a>
        <a className="zoom" href="skype://shirsath.c@northeastern.edu?call" target="_blank" rel="noopener noreferrer"> <i className="fa fa-skype fa-fa-skype-custom bodydata"></i></a>
        <a className="zoom" href="tel://+14144397164" target="_blank" rel="noopener noreferrer"> <i className="fa fa-phone-square fa-fa-phone-square-custom bodydata"></i></a>
    </div>    
  </div>
  </div>
  }
}