import React, { Component } from "react"
import { Redirect } from "react-router-dom"

 

class Login extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem('token')
    
    let LoggedIn= true
    if(token == null) {
      LoggedIn= false
    }
      this.state= { 
      username: "",
      password: "",
      LoggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  submitForm(e) {
    e.preventDefault()
    const { username, password }= this.state
    if(username === 'Asha' && password=== 'farah') {
      localStorage.setItem('token', 'asasadad')
      this.setState({
        LoggedIn:true
      })
  }
}
 
  render() {
    if (this.state.LoggedIn) {
      return <Redirect to='/logout' />
    }
    return (
     <div>
     <h1>Login</h1>
     <form onSubmit={this.submitForm}>
       <input type='text' placeholder='username' name="username" value={this.state.username} onChange={this.onChange}/>
       <br/>
       <input type='password' placeholder= 'password' name="password" value={this.state.password} onChange={this.onChange}/>
       <br/>
       <input type='submit'/>


     </form>
     </div>
   )
 }
}


  
       

export default Login;


