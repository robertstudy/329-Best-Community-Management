import React, { useState } from 'react';
import Card from '../../components/common/Card';
import { translations } from '../../data/translations';
import { analyticsData, volunteers, donations, employees, services } from '../../data/mockData';
import './AdminDashboard.css';

const AdminDashboard = ({ language, accessibilitySettings }) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole] = useState('admin'); 

  const tabs = [
    { id: 'overview', label: t.dashboard},
    { id: 'users', label: t.userManagement},
    { id: 'donations', label: t.donationsSummary},
    { id: 'reports', label: t.reports},
    { id: 'services', label: 'Service Management'}
  ];

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="metrics-grid">
        <Card accessibilitySettings={accessibilitySettings} className="metric-card">
          <div className="metric-icon">👥</div>
          <div className="metric-info">
            <h3>Total Volunteers</h3>
            <div className="metric-value">{analyticsData.totalVolunteers}</div>
            <div className="metric-change positive">+5 this month</div>
          </div>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="metric-card">
          <div className="metric-icon">💰</div>
          <div className="metric-info">
            <h3>Total Donations</h3>
            <div className="metric-value">${analyticsData.totalDonations.toLocaleString()}</div>
            <div className="metric-change positive">+12% this month</div>
          </div>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="metric-card">
          <div className="metric-icon">🏢</div>
          <div className="metric-info">
            <h3>Services Provided</h3>
            <div className="metric-value">{analyticsData.totalServices}</div>
            <div className="metric-change positive">+8 this month</div>
          </div>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="metric-card">
          <div className="metric-icon">📅</div>
          <div className="metric-info">
            <h3>Events Hosted</h3>
            <div className="metric-value">{analyticsData.totalEvents}</div>
            <div className="metric-change neutral">Same as last month</div>
          </div>
        </Card>
      </div>

      <div className="charts-section">
        <Card accessibilitySettings={accessibilitySettings} className="chart-card">
          <h3>Monthly Donations</h3>
          <div className="chart-placeholder">
            <div className="chart-bars">
              {analyticsData.monthlyDonations.map((data, index) => (
                <div key={index} className="chart-bar">
                  <div 
                    className="bar" 
                    style={{ height: `${(data.amount / 5000) * 100}%` }}
                  ></div>
                  <span className="bar-label">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="chart-card">
          <h3>Service Usage</h3>
          <div className="usage-list">
            {analyticsData.serviceUsage.map((service, index) => (
              <div key={index} className="usage-item">
                <span className="service-name">{service.service}</span>
                <div className="usage-bar">
                  <div 
                    className="usage-fill" 
                    style={{ width: `${service.usage}%` }}
                  ></div>
                </div>
                <span className="usage-percent">{service.usage}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card accessibilitySettings={accessibilitySettings} className="activity-card">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">👤</div>
            <div className="activity-content">
              <div className="activity-text">New volunteer registration: Maria Garcia</div>
              <div className="activity-time">2 hours ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">💰</div>
            <div className="activity-content">
              <div className="activity-text">Donation received: $250 from Anonymous</div>
              <div className="activity-time">4 hours ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📅</div>
            <div className="activity-content">
              <div className="activity-text">Event scheduled: Community Health Fair</div>
              <div className="activity-time">1 day ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🏢</div>
            <div className="activity-content">
              <div className="activity-text">Service booking: Wedding Ceremony</div>
              <div className="activity-time">2 days ago</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderUserManagement = () => (
    <div className="user-management">
      <div className="section-header">
        <h2>User Management</h2>
        <button className="btn btn-primary">Add New User</button>
      </div>

      <div className="users-grid">
        <Card accessibilitySettings={accessibilitySettings} className="users-card">
          <h3>Volunteers ({volunteers.length})</h3>
          <div className="users-list">
            {volunteers.map((volunteer) => (
              <div key={volunteer.id} className="user-item">
                <div className="user-info">
                  <div className="user-name">{volunteer.name}</div>
                  <div className="user-details">{volunteer.email}</div>
                  <div className="user-meta">{volunteer.hoursLogged} hours logged</div>
                </div>
                <div className="user-actions">
                  <button className="btn-small btn-outline">Edit</button>
                  <button className="btn-small btn-outline">View</button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="users-card">
          <h3>Employees ({employees.length})</h3>
          <div className="users-list">
            {employees.map((employee) => (
              <div key={employee.id} className="user-item">
                <div className="user-info">
                  <div className="user-name">{employee.name}</div>
                  <div className="user-details">{employee.position}</div>
                  <div className="user-meta">{employee.department}</div>
                </div>
                <div className="user-actions">
                  <button className="btn-small btn-outline">Edit</button>
                  <button className="btn-small btn-outline">Payroll</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderDonations = () => (
    <div className="donations-management">
      <div className="section-header">
        <h2>Donations Summary</h2>
        <div className="header-actions">
          <select className="form-select">
            <option>This Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
          <button className="btn btn-outline">Export</button>
        </div>
      </div>

      <div className="donations-stats">
        <Card accessibilitySettings={accessibilitySettings} className="stat-card">
          <h4>Total Raised</h4>
          <div className="stat-value">${analyticsData.totalDonations.toLocaleString()}</div>
        </Card>
        <Card accessibilitySettings={accessibilitySettings} className="stat-card">
          <h4>Average Donation</h4>
          <div className="stat-value">${Math.round(analyticsData.totalDonations / donations.length)}</div>
        </Card>
        <Card accessibilitySettings={accessibilitySettings} className="stat-card">
          <h4>Total Donors</h4>
          <div className="stat-value">{donations.length}</div>
        </Card>
      </div>

      <Card accessibilitySettings={accessibilitySettings} className="donations-table-card">
        <h3>Recent Donations</h3>
        <div className="table-container">
          <table className="donations-table">
            <thead>
              <tr>
                <th>Donor</th>
                <th>Amount</th>
                <th>Purpose</th>
                <th>Date</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.donorName}</td>
                  <td>${donation.amount}</td>
                  <td>{donation.purpose}</td>
                  <td>{new Date(donation.date).toLocaleDateString()}</td>
                  <td>
                    <span className={`status-badge ${donation.recurring ? 'recurring' : 'one-time'}`}>
                      {donation.recurring ? 'Recurring' : 'One-time'}
                    </span>
                  </td>
                  <td>
                    <button className="btn-small btn-outline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderReports = () => (
    <div className="reports-section">
      <div className="section-header">
        <h2>Reports & Analytics</h2>
        <button className="btn btn-primary">Generate Report</button>
      </div>

      <div className="reports-grid">
        <Card accessibilitySettings={accessibilitySettings} className="report-card" hover={true}>
          <div className="report-icon">📊</div>
          <h3>Financial Report</h3>
          <p>Comprehensive financial overview including donations, expenses, and budget analysis</p>
          <button className="btn btn-outline">Generate</button>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="report-card" hover={true}>
          <div className="report-icon">👥</div>
          <h3>Volunteer Report</h3>
          <p>Volunteer hours, activities, and impact metrics for the selected period</p>
          <button className="btn btn-outline">Generate</button>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="report-card" hover={true}>
          <div className="report-icon">🏢</div>
          <h3>Services Report</h3>
          <p>Service utilization, booking trends, and customer satisfaction metrics</p>
          <button className="btn btn-outline">Generate</button>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} className="report-card" hover={true}>
          <div className="report-icon">📈</div>
          <h3>Impact Report</h3>
          <p>Community impact assessment and program effectiveness analysis</p>
          <button className="btn btn-outline">Generate</button>
        </Card>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="services-management">
      <div className="section-header">
        <h2>Service Management</h2>
        <button className="btn btn-primary">Add New Service</button>
      </div>

      <Card accessibilitySettings={accessibilitySettings} className="services-table-card">
        <div className="table-container">
          <table className="services-table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>
                    <span className={`category-badge ${service.category}`}>
                      {service.category.replace('-', ' ')}
                    </span>
                  </td>
                  <td>{service.price}</td>
                  <td>{service.duration}</td>
                  <td>
                    <span className="status-badge active">Active</span>
                  </td>
                  <td>
                    <button className="btn-small btn-outline">Edit</button>
                    <button className="btn-small btn-outline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'users': return renderUserManagement();
      case 'donations': return renderDonations();
      case 'reports': return renderReports();
      case 'services': return renderServices();
      default: return renderOverview();
    }
  };

  if (userRole !== 'admin') {
    return (
      <div className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1>Access Denied</h1>
        <p>You don't have permission to access the admin dashboard.</p>
      </div>
    );
  }

  return (
    <div className={`admin-dashboard ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}>
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="sidebar-header">
            <h2>Admin Panel</h2>
          </div>
          <nav className="sidebar-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="nav-icon">{tab.icon}</span>
                <span className="nav-label">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-header">
            <h1>Admin Dashboard</h1>
            <div className="header-info">
              <span>Welcome back, Admin</span>
              <span className="current-date">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="dashboard-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
