import Userfront from "@userfront/toolkit/react";
import React from 'react';

Userfront.init("wbm5g49b");

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      accountName: "",
      password: "",
      passwordVerify: "",
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
    Userfront.signup({
      method: "password",
      email: this.state.email,
      password: this.state.password,
      data: {
        accountName: this.state.accountName,
      },
      redirect: "/login",
    });
  }

  render() {
    return (
      <div>
        <form className="login__form "onSubmit={this.handleSubmit}>
          <p>
            <input
              name="email"
              type="email"
              placeholder="e-mail"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              name="accountName"
              type="text"
              placeholder="имя"
              value={this.state.accountName}
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
          <p>
            <input
              name="passwordVerify"
              type="password"
              placeholder="повтрорите пароль"
              value={this.state.passwordVerify}
              onChange={this.handleInputChange}
            />
          </p>
            <div class="button text-center mt-4 mt-lg-5 w-100" >
                <button type="submit" class="button-input">войти</button>
            </div>
        </form>
      </div>
    );
  }
}

function SignUp() {
    return (
    
        <section class="login signup">
            <div class="container">
            <header class="d-flex header" >
                <div class="d-flex header-navbar align-items-center">
                    <a class ="d-block header__logo dark-text" href="/">prevision</a>
                </div>
            </header>
                <div class="login__content ">
                    <h1 class="login__text stage__title dark-text text-start text-sm-center">регистрация</h1>
                    <SignupForm />
                </div>

            </div>

        </section>
);
}

export { SignUp }