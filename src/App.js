import React, { Component } from "react";

import BudgetItem from "./components/BudgetItem";
import BudgetSummary from "./components/BudgetSummary";
import {
  AppWrapper,
  CoolButton,
  ClearInput
} from "./components/styledComponents";

const defaultItem = {
  name: "Rename Me",
  amount: "",
  isPositive: false
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetItems: [],
      salary: 0
    };
  }

  addItem = () => {
    this.setState(({ budgetItems }) => {
      budgetItems.push({ ...defaultItem, id: this.uniqueId() });
      return { budgetItems };
    });
  };

  updateItem = (id, data) => {
    this.setState(({ budgetItems }) => {
      const newBudgetItems = budgetItems.map(item => {
        if (item.id === id) {
          return { ...item, ...data };
        }
        return item;
      });

      return { budgetItems: newBudgetItems };
    });
  };

  uniqueId = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  render() {
    const { budgetItems, salary } = this.state;
    return (
      <AppWrapper>
        <h2>Budget Calculator</h2>
        <span>Annual Salary: </span>
        <ClearInput value={salary} />
        {budgetItems.map(item => (
          <BudgetItem key={item.id} item={item} updateItem={this.updateItem} />
        ))}
        <CoolButton onClick={this.addItem}>Add Item</CoolButton>
        <BudgetSummary budgetItems={budgetItems} salary={salary} />
      </AppWrapper>
    );
  }
}

export default App;
