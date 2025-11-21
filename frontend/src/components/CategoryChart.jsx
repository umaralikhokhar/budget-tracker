import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryChart({ transactions }) {
  const categories = {};

  transactions
    .filter(t => t.type === 'expense')
    .forEach(t => {
      categories[t.category] = (categories[t.category] || 0) + Number(t.amount);
    });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ['#f6c', '#6cf', '#fc6', '#6f6', '#66f'],
      },
    ],
  };

  return <Pie data={data} />;
}
