import { Link } from "react-router-dom"
import Userfront from "@userfront/toolkit/react";
import React from 'react';

class LogoutButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        disabled: !Userfront.tokens.accessToken,
      };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      event.preventDefault();
      Userfront.logout({ 
        redirect: "/forecast" 
    });
    }
  
    render() {
      return (       
        <button
          id="logout-button"
          className="header__menu-link out"
          onClick={this.handleClick}
          disabled={this.state.disabled}
        >
          выйти
        </button>
      );
}}

function Header() {


    return(
        <header className="d-flex header" >
            <div className="d-flex header-navbar align-items-center">
                <Link className ="d-block header__logo" to="/">prevision</Link>
                <Link className="header__menu-link" to="/forecast">прогноз</Link>
                {Userfront.tokens.accessToken ? (
                <Link className="header__menu-link ps-2 ps-md-2 ps-l-4 ps-xl-5 ms-xl-2" to="/profile">профиль</Link> ) : ([])}
            </div>
            <div className="d-flex header-actions align-items-center"> 
            {!Userfront.tokens.accessToken ? (
                <Link className="header__menu-link out" to="/login">войти</Link>):
                 (
                    <LogoutButton/>
                )
            }                         
            </div>
    
    </header>
    )
}

export {Header}

