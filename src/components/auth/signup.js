import React, { Component }from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

    State = {
      firstName: null,
      lastName: null,
      email: null,
      Password: null,
      formErrors: {
        firstName:"",
        lastName: "",
        email:"",
        Password:""
      }
    };
  

  render() {
  return (
   <div className='form-wrapper'>
     <h5>Created Account</h5>
     <form onSubmit={this.handleSubmit} noValidate>
     <div className='firstName'>
     <label htmlFor= 'firstName'> firstName </label>
      <input 
      type= 'text'
      className=''
      placeholder='First Name'
      type= 'text'
      name='firstName'
      noValidate
      onChange={this.handleChange}
      />
       </div>

     <div className='lastName'>
     <label htmlFor= 'lastName'> LastName </label>
       <input 
      type= 'text'
      className=''
      placeholder='Last Name'
      type= 'text'
      name='LastName'
      noValidate
      onChange={this.handleChange}
      />
       </div>
  
     <div className='email'>
     <label htmlFor= 'email'> Email </label>
       <input 
      type= 'text'
      className=''
      placeholder='Email'
      type= 'text'
      name='Email'
      noValidate
      onChange={this.handleChange}
      />
       </div>

     <div className='Password'>
     <label htmlFor= 'Password'> Password </label>
       <input 
      type= 'text'
      className=''
      placeholder='Password'
      type= 'text'
      name='Password'
      noValidate
      onChange={this.handleChange}
      />
     <div>
      <button>Submit</button></div>
       </div>
     </form>
     </div>

  );
}
}

        



export default SignUp;