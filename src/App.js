import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header/Header";
import routes from "./routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
    this.gettingProd = this.gettingProd.bind(this);
  }//this is a test
  
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

        <div className="info" />
        {routes}
        <footer className="footer"> Abdul Kanjo</footer>
      </div>
    );
  }
}

export default App;
