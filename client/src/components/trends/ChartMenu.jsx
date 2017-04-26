import React from 'react';
import PropTypes from 'prop-types';

const ChartMenu = ({ charts, active, handleViewChange }) => (
  <div className="ui center aligned container">
    <div className="ui compact menu">
      {charts.map(chart => (
        <a
          className={chart === active ? 'active item' : 'item'}
          onClick={handleViewChange}
          key={chart}
        >
          {chart}
        </a>
      ))}
    </div>
  </div>
);

ChartMenu.propTypes = {
  charts: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  handleViewChange: PropTypes.func.isRequired
};

export default ChartMenu;
