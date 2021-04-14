import React from 'react';
import './BulletPoints.styles.css';
import PropTypes from 'prop-types';

export default function BulletPoints({
  firstTitle,
  secondTitle,
  thirdTitle,
  firstLink,
  secondLink,
  thirdLink,
}) {
  return (
    <ul className="bullet-points">
      <li className="item">
        <div className="left-triangle" />
        <a href={firstLink}>{firstTitle}</a>
      </li>
      <li className="item">
        <div className="left-triangle" />
        <a href={secondLink}>{secondTitle}</a>
      </li>
      <li className="item">
        <div className="left-triangle" />
        <a href={thirdLink}>{thirdTitle}</a>
      </li>
    </ul>
  );
}

BulletPoints.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  thirdTitle: PropTypes.string.isRequired,
  firstLink: PropTypes.string.isRequired,
  secondLink: PropTypes.string.isRequired,
  thirdLink: PropTypes.string.isRequired,
};
