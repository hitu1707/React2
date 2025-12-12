import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">Portfolio</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Hitesh Singh. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App