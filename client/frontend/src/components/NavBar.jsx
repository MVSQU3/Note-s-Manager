import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          Note's Manager by Bonin :)
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/create" className="btn btn-primary gap-2">
          <PlusIcon className="w-4 h-4" />
          Ajouter une note
        </Link>
        <Link to="/register" className="btn btn-secondary ml-2">
          Se connecter
        </Link>
        <Link to="/user" className="btn btn-accent ml-2">
          Utilisateurs
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
