import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dipesh Rijal</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/skills" className="hover:text-gray-400">Skills</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
