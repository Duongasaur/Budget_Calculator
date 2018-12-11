import React, { Component } from "react";

import { BudgetName, BudgetValue, DollarSign } from "./styledComponents";

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
        <BudgetName
          value={name}
          placeholder="Rename me"
          onChange={this.buildOnChange("name")}
        />
        <DollarSign>$</DollarSign>
        <BudgetValue
          value={amount}
          placeholder="amount"
          onChange={this.buildOnChange("amount")}
          heat={heat}
        />
      </div>
    );
  }
}

export default BudgetItem;
