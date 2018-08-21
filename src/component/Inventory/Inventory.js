import React, { Component } from "react";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import Form from "../Form/Form";
import "./Inventory.css";

class InventoryL extends Component {
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
      <div className="Apps">
        <div className="info">
          <div>
            <Dashboard
              inventory={this.state.inventory}
              get={this.gettingProd}
            />
          </div>
          <div>
            <Form get={this.gettingProd} />
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryL;
