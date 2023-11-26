import StarRating from "./StarRating";
import "./index.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <StarRating />

      <StarRating maxRating={10} color="red" />

      <StarRating
        maxRating={5}
        color="aqua"
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />

      <Test />
    </div>
  );
}

export default App;

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  const testContainerStyle = {
    backgroundColor: "#aaa",
    padding: "1rem",
  };

  return (
    <div style={testContainerStyle}>
      <StarRating onMovieRate={setMovieRating} />
      <p>You have rated {movieRating} for this movie!</p>
    </div>
  );
}
