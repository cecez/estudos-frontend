import App from "./App";
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import NoMatch from "../pages/NoMatch";

export default function Root() {
  const routes = [
    { path: "/", Component: App, exact: true },
    { path: "/about", Component: About, exact: false },
    { path: "/blog", Component: Blog, exact: true },
    { path: "/blog/:id", Component: BlogPost, exact: false },
    { path: "*", Component: NoMatch, exact: false },
  ];

  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            {routes.map(({ path, Component, exact }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={<Component />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
