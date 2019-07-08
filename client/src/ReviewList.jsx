import React from 'react';
import Review from './Review';

const ReviewList = (props) => {
  return (
    <div>
      {props.reviews.map((review) => {
        return (
          <Review
            username={review.username}
            avatar={review.avatar}
            created_at={review.created_at}
            text={review.text}
          />
        );
      })}
    </div>
  );
};
export default ReviewList;
