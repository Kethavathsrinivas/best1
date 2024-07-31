import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingComponent = () => {
  return (
    <div>
      <Rating
        emptySymbol={<FaRegStar color="#ffc107" />}
        fullSymbol={<FaStar color="#ffc107" />}
        halfSymbol={<FaStarHalfAlt color="#ffc107" />}
        initialRating={4.0}
        fractions={2}
        onChange={(value) => console.log(`Rated: ${value}`)}
      />
    </div>
  );
};

export default RatingComponent;
