import "./reset.css";
import "./App.css";
import Issues from "./Issues";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Issues</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Issues />} />
          <Route path="/issues/:id" element={<Details />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
