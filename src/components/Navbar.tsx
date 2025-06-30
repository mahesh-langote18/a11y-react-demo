import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/buggy" className="nav-link">
         Page 1
      </Link>
      <Link to="/fixed" className="nav-link">Page 2</Link>
    </nav>
  );
}
