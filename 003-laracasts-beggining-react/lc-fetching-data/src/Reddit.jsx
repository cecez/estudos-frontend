import useFetch from "./useFetch";

export default function Reddit() {
  let url = "https://www.reddit.com/r/reactjs.json";
  const { data: posts, isLoading, errorMessage } = useFetch(url);

  return (
    <div>
      <h1>Reddit</h1>
      {isLoading && <div>Loading ...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {posts && posts.data.children.map((post) => (
        <div key={post.data.id}>
          <h2>{post.data.title}</h2>
          <p>{post.data.selftext}</p>
        </div>
      ))}
    </div>
  );
}
