import React, {Component} from "react"
import {Link, Redirect} from "react-router-dom"

export default class Admin extends Component {
     constructor(props) {
          super(props)
          const token = localStorage.getItem('token')
          
          let LoggedIn= true
          if (token === null) {
               LoggedIn = false
          }

          this.state = {
               LoggedIn
          }
     }

     render() {
      if (this.state.LoggedIn === false) {
           return <Redirect to= '/admin' />
      }
      return(
       <div>
            <h2>This is an Admin page. Only Auth people can see this</h2>
            <Link to= '/logout'>logout</Link>
       </div>
      )
     }
     
}