import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css'; // Optional for styling

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <h1 className="title">Welcome to MK Tech</h1>
      <Link to="/admin" className="admin-link">Admin Portal</Link>
    </div>
  );
};

export default FrontPage;
