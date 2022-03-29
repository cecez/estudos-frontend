import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeclassname="active">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
