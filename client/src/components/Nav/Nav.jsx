import { Link } from "react-router-dom"
import "./Nav.css"
function Nav() {
  return (
    <nav id="nav">
      <div className="logo-container">
        <Link className="logo" to="/">Home</Link>
      </div>
      <div className="links-container">
        <Link to="/posts">Posts</Link>
        <Link to="/create">New Post</Link>
      </div>
    </nav>
  )
}

export default Nav