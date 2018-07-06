import React, { Component } from "react";
import Product from "../Product/Product";

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
  render() {
    console.log(this.props.inventory);
    let invenList = this.props.inventory.map((e, i) => {
      return (
        <div key={i}>
          <div>
            name: {e.name} price: {e.price} image: {e.image}
          </div>
        </div>
      );
    });
    return (
      <div>
        Dashboard
        <Product />
        {invenList}
      </div>
    );
  }
}
export default Dashboard;
