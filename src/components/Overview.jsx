import React from 'react'

const Overview = ({ overviewText }) => {
  return (
    <div className="overview-container">
        <h2>Overview</h2>
        <p>{overviewText}</p>
    </div>
  )
}

export default Overview