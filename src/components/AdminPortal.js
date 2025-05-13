// src/components/AdminPortal.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPortal.css';

const courses = [
  { title: 'AWS', image: '/images/aws.jpg' },
  { title: 'Azure', image: '/images/azure.jpg' },
  { title: 'DevOps', image: '/images/devops.jpg' },
  { title: 'AI', image: '/images/ai.jpg' },
  { title: 'Java', image: '/images/java.jpg' },
  { title: 'Python', image: '/images/python.jpg' },
  { title: 'ReactJS', image: '/images/reactjs.jpg' }
];

const AdminPortal = () => (
  <div className="admin-portal-container">
    <Link to="/" className="home-button">HOME</Link>

    <h1 className="admin-title">Admin Portal</h1>

    <div className="course-grid">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-title">{course.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default AdminPortal;
