import "./App.css";
import { useState } from "react";
import Reddit from "./Reddit";
import Joke from "./Joke";

function App() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [jokeVisible, setJokeVisible] = useState(false);

  return (
    <div className="App">
      <div className="buttons">
        <button
          onClick={() =>
            setRedditVisible(() => !redditVisible)
          }
        >
          Reddit
        </button>
        <button
          onClick={() => setJokeVisible(() => !jokeVisible)}
        >
          Joke
        </button>
      </div>
      {redditVisible && <Reddit />}
      {jokeVisible && <Joke />}
    </div>
  );
}

export default App;
