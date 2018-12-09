import React, { Component } from "react";

import { SummarySpan } from "./styledComponents";

class BudgetSummary extends Component {
  monthlyExpenditure = () => {
    const { budgetItems } = this.props;
    return budgetItems.reduce((prev, item) => {
      const { amount, isPositive } = item;
      if (!amount) return prev;
      const floatAmount = parseFloat(amount);
      return isPositive ? prev - floatAmount : prev + floatAmount;
    }, 0);
  };

  render() {
    const { salary } = this.props;
    const monthlyExpenditure = this.monthlyExpenditure();
    const savings = salary - monthlyExpenditure * 12;

    return (
      <div>
        <SummarySpan>Monthly Expenditure: $ {monthlyExpenditure}</SummarySpan>
        <SummarySpan>Savings for year: $ {savings}</SummarySpan>
      </div>
    );
  }
}

export default BudgetSummary;
