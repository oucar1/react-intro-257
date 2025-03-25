import "./App.css";
import Review from "./Review";

// In this project, we are organizing our code by separating components into individual files.
// This approach allows for better modularity and reusability of components throughout the application.

// We are building a movie review web application that includes ratings, reviews, and comments.
// The components will be split across three files: Review.js, Ratings.js, and App.js.

function App() {
  return (
    <div>
      <Review username="Ozgur" rating={3} text="This movie was great!" />
      <hr />
      <Review username="Utku" rating={1} text="This movie was awful!" />
    </div>
  );
}

export default App;
