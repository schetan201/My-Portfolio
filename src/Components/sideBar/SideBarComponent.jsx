/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './SidebarStyle.scss';
//import { MDBMask, MDBView, MDBRow, MDBCol } from 'mdbreact';

export class SideBarComponent extends React.Component{
  render() {
    return <div className="card maindiv" >
    <div className="rounded-circle rounded-circle-imgdiv zoom"></div>
    <div className="card-body">
      <h5 className="card-title title">Chetan Shirsath</h5>
      <p className="card-text title">MS in IS - <a href="https://www.northeastern.edu/" target="window.opener()" >Northeastern University</a>
      <br></br> Software Engineer <br></br> Former Web Developer Intern at <a href="https://www.3ds.com/"target="window.opener()" >Dassault Systèmes</a><br></br>
Boston, Massachusetts </p>
    </div>    
  </div>
  }
}