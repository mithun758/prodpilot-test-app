/**
 * Main dashboard component.
 * Shows user's account overview, recent activity, and quick actions.
 */
import React from 'react';

const Dashboard = ({ user, recentActivity }) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <div className="stats">
        <div className="stat-card">Total Orders</div>
        <div className="stat-card">Pending Payments</div>
        <div className="stat-card">Active Subscriptions</div>
      </div>
      <div className="recent-activity">
        {recentActivity.map(item => (
          <div key={item.id} className="activity-item">
            {item.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
