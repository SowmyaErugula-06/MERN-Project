import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Registering the required components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

const ProgressTracking = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Weight Loss Progress',
                data: [75, 74, 72, 70],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Progress Tracking',
            },
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Your Progress Tracking</h2>
            <Line data={data} options={options} />
        </div>
    );
};

// Styles for the component
const styles = {
    container: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
};

export default ProgressTracking;
