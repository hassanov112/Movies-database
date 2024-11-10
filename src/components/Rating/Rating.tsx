import './Rating.css';

interface RatingProps {
  id?: string;
  rating: number;
  ratingCount: number;
  maxRating?: number;
}

const Rating = ({ id, rating, ratingCount, maxRating = 10 }: RatingProps) => {
  const filledStars = Math.round((rating / maxRating) * 5);

  return (
    <div id={id ?? ''} className="rating">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < filledStars ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
      <span className="rating-value">
        {rating.toFixed(1)}/{maxRating} ({ratingCount})
      </span>
    </div>
  );
};

export default Rating;
