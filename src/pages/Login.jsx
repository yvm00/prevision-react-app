import Userfront from "@userfront/core";
import React from 'react';
import { Link } from "react-router-dom";

Userfront.init("wbm5g49b");

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: "",
      password: "",
    };

  this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    Userfront.login({
      method: "password",
      emailOrUsername: this.state.emailOrUsername,
      password: this.state.password,
      redirect: "/"
    });
  }

  render() {
    return (
      <div>
        <form className="login__form" onSubmit={this.handleSubmit}>
            <p>
                <input
                name="emailOrUsername"
                type="text"
                placeholder="e-mail" 
                value={this.state.emailOrUsername}
                onChange={this.handleInputChange}
                />
            </p>
            <p>
                <input
                name="password"
                type="password"
                placeholder="пароль" 
                value={this.state.password}
                onChange={this.handleInputChange}
                />
            </p>
            <a className="button-link ps-4 text-lowercase " href="#">забыли пароль?</a>
            <div className="button text-center mt-4 mt-lg-5 w-100" >
                <button type="submit"  className="button-input">войти</button>
            </div>
            <div className="ps-4">
                <Link className="button-link " to="/signup">зарегистрироваться</Link>
            </div>
        </form>
      </div>
    );
  }
}

function Login() {

    return (    
          
    <section className="login">
    <div className="container">
    <header className="d-flex header" >
        <div className="d-flex header-navbar align-items-center">
            <a className ="d-block header__logo dark-text" href="/">prevision</a>
        </div>
    </header>
        <div className="login__content ">
        <h1 className="login__text stage__title dark-text text-start text-sm-center">добро 
            <span className="stage__title-span"> пожаловать! </span>
        </h1>
        <LoginForm />          
        </div>

    </div>

</section>

);
}

export { Login }