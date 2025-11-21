import axios from 'axios';

export default function TransactionList({ transactions, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/transaction/${id}`);
    onDelete(id);
  };

  return (
    <ul>
      {transactions.map(t => (
        <li key={t.id}>
          {t.title} - ${t.amount} ({t.category}) [{t.type}]
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
