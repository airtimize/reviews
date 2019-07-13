import React from 'react';

const RatingsAccuracy = props => (
  <div className="category-stars">

    <div>
      <span>Accuracy</span>
    </div>

    <div className="stars">
      { /* <span>{props.accuracy}</span> */ }
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
    </div>

  </div>
);

export default RatingsAccuracy;
