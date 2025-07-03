// import { Link } from "react-router";
// import { PlusIcon } from "lucide-react";

// const NavBar = () => {
//   return (
//     <div className="navbar justify-around">
//       <Link to={"/"}>
//         <h1 className="text-xl font-bold">Note's Manager</h1>
//       </Link>
//       <Link to={"/create"} className="btn">
//         <PlusIcon />
//         Ajouter une note
//       </Link>
//     </div>
//   );
// };

// export default NavBar;


import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          Note's Manager
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/create" className="btn btn-primary gap-2">
          <PlusIcon className="w-4 h-4" />
          Ajouter une note
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
