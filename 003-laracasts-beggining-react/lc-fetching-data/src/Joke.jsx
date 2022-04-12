import { useQuery } from "react-query";

function fetchJoke() {
  return fetch("https://api.chucknorris.io/jokes/random").then((response) =>
    response.json()
  );
}

export default function Joke() {
  const {
    data: joke,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("joke", fetchJoke, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h1>Joke</h1>
      {isLoading && <div>Loading ...</div>}
      {isError && <div>Erro: {error.message}</div>}
      {isSuccess && <div>{joke.value}</div>}
    </div>
  );
}
