import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Home.css'; // Optional, for styling

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to FitTrack!</h1>
        <p>Your personal fitness journey starts here.</p>
      </header>

      <section className="features-section">
        <h2>Track your fitness, reach your goals!</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Track Workouts</h3>
            <p>Log your exercises and see progress over time. Track running, cycling, lifting, and more!</p>
            <Link to="/workout" className="btn">Start Workout</Link>
          </div>
          <div className="feature-item">
            <h3>Nutrition Plans</h3>
            <p>Keep track of your daily calorie intake and follow personalized meal plans for your goals.</p>
            <Link to="/nutrition" className="btn">View Nutrition</Link>
          </div>
          <div className="feature-item">
            <h3>Progress Reports</h3>
            <p>Check your weekly progress reports to stay motivated and on track to meet your fitness goals.</p>
            <Link to="/progress" className="btn">View Progress</Link>
          </div>
        </div>
      </section>

      <section className="join-section">
        <h2>Join Our Community</h2>
        <p>Share your journey and connect with other fitness enthusiasts. Sign in or sign up to get started!</p>
        <div className="auth-links">
          <Link to="/login" className="btn">Log In </Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
