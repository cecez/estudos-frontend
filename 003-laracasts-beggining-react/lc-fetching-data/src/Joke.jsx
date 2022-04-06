import { useEffect, useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((json) => {
        setJoke(json.value);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setErrorMessage(`There was an error: ${error.message}`);
      });
  }, []);

  return (
    <div>
      <h1>Joke</h1>
      {isLoading && <div>Loading ...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {joke && <div>{joke}</div>}
    </div>
  );
}
