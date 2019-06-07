import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/Home.js';
import Navega from './components/Navega.js';
import Lands from './components/Lands.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Error from './components/Error.js';
import Confirm from './components/Confirm.js';
import UserPage from './components/UserPage.js';
import { connect } from 'react-redux'

class App extends Component {

  render() {
      return (
        <Router>
            <div className="navbarandbody">
                {/* NAV BAR on the top of the page */}
                <Navega />
                <Switch>

                      {/* to HOME */}
                      <Route
                        exact path="/"
                        component={Home}
                      />

                      {/* to NOT FINISHED NEW LANDING PAGE */}
                      <Route path="/lands" component={Lands} />

                      {/* to USER PROFILE PAGE */}
                      <Route path="/user"
                            render = {() => {
                              if(this.props.email) {
                                return <UserPage />
                              } else {
                                return <Redirect to = "/login" />
                              }
                            }
                            } />
                      
                      {<Route path="/login"
                            render={() => {
                                    if (!this.props.email)
                                      return <Login />
                                    else
                                      return <Redirect to="/"/>
                            }}
                      />}

                      {/* to REGISTER */}
                      <Route path="/register" component={Register} />

                      {/* to CONFIRMATION PAGE */}
                      <Route path="/confirm" component={Confirm} />

                      {/* to ERROR PAGE */}
                      <Route component={Error} />

                </Switch>
              </div>
        </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    email: store.email
  }
}

export default connect(mapStateToProps, null)(App)
