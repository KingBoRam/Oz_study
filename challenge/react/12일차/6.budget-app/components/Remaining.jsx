import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { formatNumberToWon } from '../utils';

const Remaining = () => {
  const { expenses, incomes } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const totalIncomes = incomes.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remainingCost = totalIncomes - totalExpenses;

  const alertType =
    remainingCost > totalIncomes ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>남은 돈 : {formatNumberToWon(remainingCost)}</span>
    </div>
  );
};

export default Remaining;
