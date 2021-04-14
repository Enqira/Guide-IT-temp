import React from 'react';
import PropTypes from 'prop-types';
import './JobCard.styles.css';

export default function JobCard({ title, description }) {
  return (
    <div className="job-card-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
