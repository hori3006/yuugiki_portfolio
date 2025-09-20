import * as styles from "./Simulator.css";

const Simulator = () => {
  return (
    <div className={styles.simulator}>Simulator</div>
  )
}

export default Simulator

/*import * as styles from './Demo.css'; 
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Simulator: React.FC = () => {
  const [spins, setSpins] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const spin = () => {
    const probability = 0.2;
    const result = Math.random() < probability ? 1000 : 0;
    setSpins([...spins, result]);
    setCount(count + 1);
  };

  const data = {
    labels: spins.map((_, i) => `回転${i + 1}`),
    datasets: [
      {
        label: '出玉',
        data: spins,
        backgroundColor: '#1e3a8a',
      },
    ],
  };

  return (
    <div className={styles.simulatorContainer}>
      <h2>リゼロ風 出玉シミュレーター</h2>
      <button onClick={spin} className={styles.simulatorButton}>回転</button>
      <p>回転数: {count}</p>
      <div className={styles.chartWrapper}>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default Simulator;*/