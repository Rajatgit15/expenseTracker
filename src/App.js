import React from 'react';
import './App.css';
import Header from './Header'
import Balance from './Balance'
import Income from './Income'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction';
import  { GlobalProvider } from './GlobalState'

function App() {
  return (
    <GlobalProvider>
      
    <Header/>
    <div className = "container">
      <Balance />
      <Income/>
      <TransactionList/>
      <AddTransaction/>
    </div>

    </GlobalProvider>
  );
}

export default App;
