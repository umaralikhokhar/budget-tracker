import { useState } from 'react';
import axios from 'axios';

export default function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/add-transaction', { title, amount, category, type });
      onAdd(res.data);
      setTitle(''); setAmount(''); setCategory('');
    } catch (err) {
      alert('Error adding transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <label>
        <input type="radio" checked={type==='income'} onChange={() => setType('income')} /> Income
      </label>
      <label>
        <input type="radio" checked={type==='expense'} onChange={() => setType('expense')} /> Expense
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}
