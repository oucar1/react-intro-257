function Rating(props) {
  return <div>{props.stars}/4 stars</div>;
}

// To use this component in another file, we need to export it.
// Exporting allows us to import and reuse this component in other parts of the application.
export default Rating;
