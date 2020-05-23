import React from 'react';
// import axios from 'axios';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    }
  
    handleSubmit(e){
      e.preventDefault();
      console.log(this.state);
      // axios({
      //   method: "POST", 
      //   url:"http://localhost:3000", 
      //   data:  this.state
      // }).then((response)=>{
      //   if (response.data.status === 'success'){
      //     alert("Message Sent."); 
      //     this.resetForm()
      //   }else if(response.data.status === 'fail'){
      //     alert("Message failed to send.")
      //   }
      // })
    }
  
    resetForm(){
      
       this.setState({name: '', email: '', message: ''})
    }
    
    render() {
    return(
        <FormWrapper>
          {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
            <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <FormLabel htmlFor="name">Name</FormLabel>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <FormLabel htmlFor="exampleInputEmail1">Email address</FormLabel>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <FormLabel htmlFor="message">Message</FormLabel>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          {/* </form> */}
          </Form>
        </FormWrapper>
      );
    }
  
    onNameChange(event) {
    this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
    this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
    this.setState({message: event.target.value})
    }
  }

export default ContactForm;

const FormLabel = styled.div`
  color: #e2e2e2;
`;

const FormWrapper = styled.div`
  background-image: linear-gradient(180deg, #5A6063 0%, #272626 100%);
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 40vw;
  margin: 20px 0;
`;