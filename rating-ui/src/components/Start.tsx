type StarProps = {
  star: number;
  color?: string;
  rating?: number;
  hover?: number;
  ratingClicked: (star: number) => void;
  ratingHoveredEntered: (star: number) => void;
  ratingHoveredLeaved: () => void;
}
const Star = ({ star, color, rating = 0, hover = 0, ratingClicked, ratingHoveredEntered, ratingHoveredLeaved }: StarProps) => {

  return ( 
    <>
      <span
        className='star'
        style={{color: star <= (hover || rating) ? color : '#ccc'}}
        key={star}
        onClick={() => ratingClicked(star)}
        onMouseEnter={() => ratingHoveredEntered(star)}
        onMouseLeave={ratingHoveredLeaved}
      >{'\u2605'}</span>
    </>
   );
}
 
export default Star;