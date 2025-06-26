import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/buggy" style={{ marginRight: "1rem" }}>
        Buggy Page
      </Link>
      <Link to="/fixed">Fixed Page</Link>
    </nav>
  );
}
