export default function Summary({ transactions }) {
  const income = transactions.filter(t => t.type==='income').reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.type==='expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
  <div className="summary-box">
    <h3>Total Income: ${income}</h3>
    <h3>Total Expenses: ${expense}</h3>
    <h3>Balance: ${balance}</h3>
  </div>
);

}
