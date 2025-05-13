import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <h1 className="title">Welcome to MK Ed-Tech</h1>
      <p className="rainbow-text">Learn • Do • Grow</p>
      <Link to="/admin" className="admin-link">Enroll Now</Link>
    </div>
  );
};

export default FrontPage;
