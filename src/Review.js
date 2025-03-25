import Rating from "./Rating";

// We define a prop called `rating` in the Review component.
// This prop is passed down to the Rating component as the `stars` property.

function Review(props) {
  return (
    <div className="Review">
      <div>Review by {props.username}</div>
      <Rating stars={props.rating} />
      <div>{props.text}</div>
    </div>
  );
}

export default Review;
