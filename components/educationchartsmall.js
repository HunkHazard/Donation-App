import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Pakistan', 'India', 'Bangladesh', 'Sri Lanka'],
    datasets: [
        {
            label: 'Government Expenditure Used for Military',
            data: [18, 8, 9, 9.5],
            backgroundColor: 'rgba(183, 48, 100)',
        },
        {
            label: 'Government Expenditure Used for Education',
            data: [10.5, 17, 10.5, 10],
            backgroundColor: 'rgba(33, 38, 50)',
        }
    ]
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            position: 'bottom',
            align: 'center',
            offset: 0,
            labels: {
                boxWidth: 12,
                usePointStyle: false,
                padding: 12,
            }
        }
    },
    animation: {
        duration: 3000, // set animation duration in milliseconds
        easing: 'easeOutQuart' // set easing function for animation
    },
    responsive: true,
    maintainAspectRatio: false
};
const BarChart = () => {
    return (
        <div style={{ height: '250px', width: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
