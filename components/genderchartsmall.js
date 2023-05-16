import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  labels: ["2006", "2008", "2010", "2012", "2014", "2016", "2018"],
  datasets: [
    {
      label: 'Male',
      data: [64, 67, 65, 68, 67.5, 68, 67, 70, 68.5, 69, 71.5, 69.5, 69.5],
      fill: false,
      borderColor: 'rgb(183, 48, 100)',
      tension: 0.1,
      pointRadius: 4,
      pointBackgroundColor: 'rgb(255,255,255)',
    },
    {
      label: 'Female',
      data: [35, 39, 38, 40, 40.5, 41, 42.5, 43, 42.5, 44, 46.5, 45.5, 46.5],
      fill: false,
      borderColor: 'rgb(33, 38, 50)',
      tension: 0.1,
      pointRadius: 4,
      pointBackgroundColor: 'rgb(255,255,255)',
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'center',
      offset: 0,
      labels: {
        boxWidth: 12,
        usePointStyle: true,
        padding: 20,
      }
    }
  },
  animation: {
    duration: 3000, // set animation duration in milliseconds
    easing: 'easeOutQuart' // set easing function for animation
  }
};

const LineChart = () => {
  return (
    <div style={{ height: '250px', width: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
