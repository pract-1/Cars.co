import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
    this.gettingProd = this.gettingProd.bind(this);
  }
  componentDidMount() {
    this.gettingProd();
  }
  gettingProd() {
    axios.get("/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="info">
          <Dashboard inventory={this.state.inventory} get={this.gettingProd} />
          <Form get={this.gettingProd} />
        </div>
      </div>
    );
  }
}

export default App;
