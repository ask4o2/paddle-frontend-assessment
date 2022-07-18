import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
// import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Github from "./pages/Github.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="bg-custom-bg">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/github" element={<Github />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
