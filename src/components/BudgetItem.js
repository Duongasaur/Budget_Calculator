import React, { Component } from "react";

import { BudgetName, BudgetValue } from "./styledComponents";

class BudgetItem extends Component {
  buildOnChange = key => e => {
    e.preventDefault();
    const {
      item: { id },
      updateItem
    } = this.props;
    updateItem(id, { [key]: e.target.value });
  };

  render() {
    const { heat, item } = this.props;
    const { name, amount } = item;

    return (
      <div>
        <BudgetName value={name} onChange={this.buildOnChange("name")} />
        <BudgetValue
          value={amount}
          onChange={this.buildOnChange("amount")}
          heat={heat}
        />
      </div>
    );
  }
}

export default BudgetItem;
