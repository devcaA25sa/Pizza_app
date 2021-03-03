import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../static/assets/image/pizzaManChange.png';

function Nav() {
     const navstyle ={
          color: "white"
     };
     
     return (
          <div className="nav-container">
               <div className= 'nav-wrapper'>
                <img src={Logo} alt= 'images'/>

       <ul className='nav-link'>
           <Link style= {navstyle} to= '/Menu'>
            <li>Menu</li>
               </Link>

                    

          <Link style= {navstyle} to= '/contact'>
            <li>Contact</li>
                </Link>
                    
          <Link style= {navstyle} to= '/Login'>
            <li>login</li>
           </Link>
                   
                    
          <Link style= {navstyle} to= "/about">
             <li>About</li>
            </Link>
                    
                          

               </ul>
                    
                </div> 
          </div>   
      
     
     )
     
}
export default Nav;