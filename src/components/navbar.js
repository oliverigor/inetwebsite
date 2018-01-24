import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

class Navbar extends Component{


  loginGoogle(){
    firebase.auth().signInWithRedirect(provider)
  }

  render() {
    return(
    <div style={navbarStyle}className="navbar">


      <button>Sobre</button>

      <button>Parceiros</button>


      <button>Ofertas</button>


      <button>Contato</button>

      <button style={loginStyle} onClick ={this.loginGoogle}>Login</button>


    </div>
    )
  }

}



const navbarStyle = {

  width:'100%',
  padding:'1% 10% 0 10%'
}

const loginStyle = {
  background: '#F8E228',
  borderRadius: '6px',
  cursor:'pointer',
  padding:'10px',
  color:'#1d1d1d',
  marginLeft:'60px'
}


export  default Navbar;
