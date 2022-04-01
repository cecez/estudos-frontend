import { useEffect, useState } from "react";

export default function Reddit() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((response) => response.json())
      .then((json) => setPosts(json.data.children));
  }, []);

  return (
    <div>
      <h1>Reddit</h1>
      {posts.map((post) => (
        <div key={post.data.id}>
          <h2>{post.data.title}</h2>
          <p>{post.data.selftext}</p>
        </div>
      ))}
    </div>
  );
}
