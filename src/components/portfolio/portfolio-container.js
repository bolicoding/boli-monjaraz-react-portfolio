import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
  constructor() {
    super();

    console.log('it rendered')
  }

  portfolioItems() {
    const data = ["Fast Garage", "FFL", "OTC", "FedEx"];

    return data.map(item => {
      return <PortfolioItem title={item} />;
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>

        {this.portfolioItems()}
      </div>
    );
  }
}