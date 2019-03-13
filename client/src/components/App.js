//App.js is for rendering layer control (react router)
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//gives certain components the ability to call action creators
import { connect } from "react-redux";
//pulls out all the action creators we made in actions.js
//once we pass in the actions they are assigned to App and can be referenced using props
import * as actions from "../actions";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
