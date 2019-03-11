import React from 'react';

const PieChart = ({ children, onClick }) => (
  <div onClick={onClick}>
    {children}
  </div>
);

export default PieChart;
