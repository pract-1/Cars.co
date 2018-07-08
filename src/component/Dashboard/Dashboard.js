import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    this.setState({ inventory: this.props.inventory });
  }
  handleDelete(id) {
    axios.delete(`/api/product/${id}`).then(() => {
      this.props.get();
    });
  }
  render() {
    console.log(this.props.inventory);
    let invenList = this.props.inventory.map((e, i) => {
      return (
        <div key={i}>
          <div className="prod">
            <div>
              <img className="pic" src={e.image} width="320" height="200" />
            </div>
            <div className="information">
              <div> {e.name}</div>
              <div className="price">Price: ${e.price}</div>
              <div className="delete-button">
                <button onClick={id => this.handleDelete(e.product_id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Product />
        {invenList}
      </div>
    );
  }
}
export default Dashboard;
