// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) =>(
  <div className="review-list">
  {
    reviews.map(review=>
    <div className="review"  key={review.headline}>
  <h1><a href={review.link.url}> {review.display_title}</a></h1>
  <p>{review.headline} </p>
  <p>{review.summary_short}</p>
  <h3>{review.byline}</h3>
  </div> )}
  </div>
)

export default MovieReviews;