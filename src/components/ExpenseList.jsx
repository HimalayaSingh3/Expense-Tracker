import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onRemoveExpense }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onRemoveExpense={onRemoveExpense} />
      ))}
    </ul>
  );
}

export default ExpenseList;
