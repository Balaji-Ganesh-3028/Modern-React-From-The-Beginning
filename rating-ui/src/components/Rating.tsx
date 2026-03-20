
import Button from "./Button";
import Modal from "./Modal";
import Star from "./Start";
import { useState } from "react";

type RatingProps = {
  heading?: string;
  color?: string;
  feedbackMessages?: string[];
}
const Rating = ({
  heading = 'Rate Your Experince',
  feedbackMessages = ['Very Bad', 'Bad', 'Average', 'Good', 'Excellent']
}: RatingProps) => {
  const arr = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if(rating > 0)
      setSubmitted(true);
  }

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  }

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {arr.map((star) => (
          <Star
            key={star}
            star={star}
            color='gold'
            rating={rating}
            hover={hover}
            ratingClicked={setRating}
            ratingHoveredEntered={setHover}
            ratingHoveredLeaved={() => setHover(0)}
          />          
        ))}
      </div>
      {rating > 0 && <p className="feedback"> {feedbackMessages[rating - 1]} </p>}
      
      {/* <button className="submit-btn" onClick={handleSubmit} disabled={rating === 0}>Submit</button> */}
      <Button className='submit-btn' onClickButton={handleSubmit} disabled={rating === 0}>Submit</Button>

      {/* Model */}
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
}

export default Rating;