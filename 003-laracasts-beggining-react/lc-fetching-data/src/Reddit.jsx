import { useEffect, useState } from "react";

export default function Reddit() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.data.children);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setErrorMessage(`There was an error: ${error.message}`);
      });
  }, []);

  return (
    <div>
      <h1>Reddit</h1>
      {isLoading && <div>Loading ...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {posts.map((post) => (
        <div key={post.data.id}>
          <h2>{post.data.title}</h2>
          <p>{post.data.selftext}</p>
        </div>
      ))}
    </div>
  );
}
