import React from "react";
import './ContactStyle.scss';
import * as emailjs from 'emailjs-com'
//import {saveUser} from '../../Service/registerService';

export class ContactComponent extends React.Component{
    constructor(props){
        super(props);
        this.onChangefName = this.onChangefName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangemsg = this.onChangemsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName : '',
            email : '',
            Message : ''
        }
    }

    onChangefName(e){
        this.setState({
            firstName : e.target.value 
        })
    }

    onChangeemail(e){
        this.setState({
            email : e.target.value
        })
    }
    onChangemsg(e){
        this.setState({
            Message : e.target.value
        })
    }
 
    onSubmit(e) {
        e.preventDefault();

       /* const user = {
            firstName : this.state.firstName,
            email : this.state.email,
            Message : this.state.Message
        }*/
       // saveUser.bind(user);

       let templateParams = {
        from_name: this.state.firstName,
        from_email: this.state.email,
        to_name: 'schetan202@gmail.com',
        message_html: this.state.Message,
       }
       emailjs.send(
        'gmail',
        'template_IQ6BBHTa',
         templateParams,
        'user_S8j22AehSML2yVXBe8xWZ'
       )
        this.setState({
            firstName : '',
            email : '',
            Message : ''
        })
         
    } 
    

    render(){
        return <div>
        <div className="base-container">
            {/* <div className="header"> Contact Me </div> */}
            <div className="content">
                <form onSubmit = {this.onSubmit}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="firstName"> Name </label>
                        <input type="text" required name="firstName" value={this.state.firstName} onChange={this.onChangefName} placeholder="First Name"></input>
                    </div>         
                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" required name="email" value={this.state.email} onChange={this.onChangeemail} placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Message"> Message </label>
                        <textarea  required name="Message" value={this.state.Message} onChange={this.onChangemsg} className="form-control" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                    <button type="Submit" className="FormField__Button">Send</button>
                    </div>
                </div>
                </form> 
            </div>
        </div>
        </div>
    }
}