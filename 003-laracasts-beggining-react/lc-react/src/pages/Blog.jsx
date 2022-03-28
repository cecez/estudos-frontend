import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/blog/1">Post eins</Link>
        </li>
        <li>
          <Link to="/blog/2">Post zwei</Link>
        </li>
      </ul>
    </div>
  );
}
