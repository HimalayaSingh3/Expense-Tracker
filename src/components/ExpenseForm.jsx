import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const expense = {
      id: Math.random().toString(),
      title,
      amount: parseFloat(amount),
      date: new Date(),
    };
    
    onAddExpense(expense);
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        
      />
      <Button variant="contained" color="primary" type="submit">
        Add Expense
      </Button>
    </form>
  );
}

export default ExpenseForm;
