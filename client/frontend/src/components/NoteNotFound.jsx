// import { NotebookIcon } from "lucide-react";
// import { Link } from "react-router";

// const NoteNotFound = () => {
//   return (
//     <div className="">
//       <div className="">
//         <NotebookIcon className="" />
//       </div>
//       <h3 className="">No notes yet</h3>
//       <p className="">
//         Ready to organize your thoughts? Create your first note to get started on your journey.
//       </p>
//       <Link to="/create" className="">
//         Create Your First Note
//       </Link>
//     </div>
//   );
// };
// export default NoteNotFound;

import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NoteNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-base-100 rounded-lg shadow-md">
      <div className="bg-base-200 p-4 rounded-full mb-4">
        <NotebookIcon className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Aucune note pour l’instant</h3>
      <p className="text-sm text-gray-400 mb-4 max-w-md">
        Prêt à organiser vos idées ? Créez votre première note pour commencer votre parcours.
      </p>
      <Link to="/create" className="btn btn-primary">
        Créer votre première note
      </Link>
    </div>
  );
};

export default NoteNotFound;
