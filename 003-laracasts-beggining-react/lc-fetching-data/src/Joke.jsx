import useFetch from "./useFetch";

export default function Joke() {
  const {
    data: joke,
    isLoading,
    errorMessage,
  } = useFetch("https://api.chucknorris.io/jokes/random");

  return (
    <div>
      <h1>Joke</h1>
      {isLoading && <div>Loading ...</div>}
      {errorMessage && <div>Erro: {errorMessage}</div>}
      {joke && <div>{joke.value}</div>}
    </div>
  );
}
