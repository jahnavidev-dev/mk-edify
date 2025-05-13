// src/components/FrontPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => (
  <div>
    <h1>Welcome to MK Tech</h1>
    <Link to="/admin">Go to Admin Portal</Link>
  </div>
);

export default FrontPage;
