import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/authRedux/authAction.js';
import { Link } from 'react-router-dom';

export function Login(props)  {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState(); 

  const handleSubmit = async e => {
    e.preventDefault();
    props.login({ username, password })
  }  

    return (
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="login-brand">
                  <img
                    src="../assets/img/stisla-fill1.svg"
                    alt="logo"
                    width="100"
                    className="shadow-light rounded-circle"
                  />
                </div>

                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Login</h4>
                  </div>

                  <div className="card-body">
                    <form
                      method="POST"
                      action="#"
                      noValidate
                      className="needs-validation"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          tabIndex="1"
                          required
                          autoFocus
                          onChange={e => setUserName(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please fill in your email
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">
                            Password
                          </label>
                          <div className="float-right">
                            <a
                              href="auth-forgot-password.html"
                              className="text-small"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          tabIndex="2"
                          required
                          onChange={e => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          please fill in your password
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="remember"
                            className="custom-control-input"
                            tabIndex="3"
                            id="remember-me"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="remember-me"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>

                      <div className="form-group">

                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          tabIndex="4"
                           to="/"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <div className="text-center mt-4 mb-3">
                      <div className="text-job text-muted">
                        Login With Social
                      </div>
                    </div>
                    <div className="row sm-gutters">
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-facebook">
                          <span className="fab fa-facebook"></span> Facebook
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-twitter">
                          <span className="fab fa-twitter"></span> Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-muted text-center">
                  Don't have an account?{" "}
                  <a href="auth-register.html">Create One</a>
                </div>
                <div className="simple-footer">
                  Copyright &copy; TechnoSoft 2021
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    }
    const mapDispatchToProps = (dispatch) => {
      return {
        login: (credentials) => {
          return dispatch(login(credentials));
        }
      }  
    };
    
    export default connect(null,mapDispatchToProps)(Login)
    