import React from 'react';
import Review from './Review';

const ReviewList = props => (
  <div>
    {props.reviews.map(review => (
      <Review
        username={review.username}
        avatar={review.avatar}
        created_at={review.created_at}
        text={review.text}
        responseUsername={review.response_username}
        responseAvatar={review.response_avatar}
        responseText={review.response_text}
      />
    ))}
  </div>
);
export default ReviewList;
