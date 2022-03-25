import App from "./App";
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";

export default function Root() {
  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<App />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
