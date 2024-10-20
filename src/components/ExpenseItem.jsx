import React from 'react';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';

function ExpenseItem({ expense, onRemoveExpense }) {
  return (
    <li>
      <div className='item'>
        <h5>{expense.title}</h5>
        <p>Amount: {expense.amount.toFixed(2)}</p>
        <p>Date: {expense.date.toLocaleDateString()}</p>
        <Button variant="contained" color="primary" onClick={() => onRemoveExpense(expense.id)}>
          <DeleteIcon/>
        </Button>
      </div>
    </li>
  );
}

export default ExpenseItem;
