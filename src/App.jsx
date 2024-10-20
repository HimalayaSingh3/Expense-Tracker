import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import "./App.css"

function App() {
  const [expenses, setExpenses] = useState([]);
  const [totalBudget, setTotalBudget] = useState('');
  const [budgetInput, setBudgetInput] = useState('');

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (!budgetInput) return;
    setTotalBudget(parseFloat(budgetInput));
    setBudgetInput('');
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  const remainingBalance = totalBudget - totalExpense;

  return (
    <div className="App">
     <div className="tracker">
      <h1>Expense Tracker</h1>
       <div className="col-box">
        <div className="col1">
          <label>Total<br/>Budget</label>
          <h2>{totalBudget ? totalBudget.toFixed(2) : '0.00'}</h2>
        </div>
        <div className="col2">
        <label>Total<br/>Expense</label>
        <h2>{totalExpense.toFixed(2)}</h2>
        </div>
        <div className="col3">
        <label>Remaining<br/>Balance</label>
        <h2>{remainingBalance ? remainingBalance.toFixed(2) : '0.00'}</h2>
        </div>
       </div>
        <form onSubmit={handleBudgetSubmit}>
          <TextField
            label="Enter Total Budget"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            
          />
          <Button variant="contained" color="primary" type='submit'>
            Set Budget
          </Button>
        </form>

        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onRemoveExpense={removeExpense} />
      
     </div>
    </div>
  );
}

export default App;
