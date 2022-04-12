import { useQuery } from "react-query";

function fetchPosts() {
  return fetch("https://www.reddit.com/r/reactjs.json").then((response) =>
    response.json()
  );
}

export default function Reddit() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("posts", fetchPosts);

  return (
    <div>
      <h1>Reddit</h1>
      {isLoading && <div>Loading ...</div>}
      {isError && <div>{error}</div>}
      {isSuccess &&
        posts.data.children.map((post) => (
          <div key={post.data.id}>
            <h2>{post.data.title}</h2>
            <p>{post.data.selftext}</p>
          </div>
        ))}
    </div>
  );
}
