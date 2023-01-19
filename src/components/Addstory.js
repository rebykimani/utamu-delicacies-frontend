import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    setReviews([...reviews, review]);
    e.target.review.value = '';
  }

  return (
    <div>
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit}>
        <textarea name="review" placeholder="Leave a review"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
