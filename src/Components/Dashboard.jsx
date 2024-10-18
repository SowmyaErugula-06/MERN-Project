import React from 'react';

// Sample user data
const userData = {
    weight: 70, // in kg
    height: 175, // in cm
    activityLevel: "Moderately Active",
    goal: "Weight Loss",
    progress: 75, // percentage
};

const Dashboard = () => {
    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.title}>Dashboard</h2>
                <div style={styles.card}>
                    <h3>User Information</h3>
                    <p><strong>Weight:</strong> {userData.weight} kg</p>
                    <p><strong>Height:</strong> {userData.height} cm</p>
                    <p><strong>Activity Level:</strong> {userData.activityLevel}</p>
                    <p><strong>Fitness Goal:</strong> {userData.goal}</p>
                </div>
                <div style={styles.card}>
                    <h3>Progress</h3>
                    <div style={styles.progressContainer}>
                        <div style={{ ...styles.progressBar, width: `${userData.progress}%` }}>
                            <span style={styles.progressText}>{userData.progress}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Styles for the components
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevents body from scrolling
    },
    container: {
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
        animation: 'slideIn 0.5s ease-in-out', // Title animation
    },
    card: {
        background: '#f9f9f9',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px 0',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 0.5s ease-in-out', // Card animation
    },
    progressContainer: {
        background: '#e0e0e0',
        borderRadius: '5px',
        height: '20px',
        margin: '10px 0',
        overflow: 'hidden', // Ensure the progress bar doesn't overflow
    },
    progressBar: {
        background: '#4CAF50',
        height: '100%',
        borderRadius: '5px',
        transition: 'width 0.5s ease-in-out', // Smooth transition for progress bar
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressText: {
        color: 'white',
        fontWeight: 'bold',
        animation: 'fadeIn 0.5s ease-in-out', // Text animation
    },
};

// CSS Animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`, styleSheet.cssRules.length);

export default Dashboard;
