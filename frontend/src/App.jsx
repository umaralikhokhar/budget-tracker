import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import Summary from './components/Summary';
import CategoryChart from './components/CategoryChart';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transaction').then(res => setTransactions(res.data));
  }, []);

  const addTransaction = (t) => setTransactions([...transactions, t]);
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
  <div className="container">
    <h1>Budget Tracker</h1>
    <TransactionForm onAdd={addTransaction} />
    <Summary transactions={transactions} />
    <CategoryChart transactions={transactions} />
    <TransactionList transactions={transactions} onDelete={deleteTransaction} />
  </div>
);

}

export default App;
