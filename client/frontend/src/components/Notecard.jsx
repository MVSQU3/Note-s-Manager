import { PenSquare, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utilis";
import api from "../lib/axios";
import toast from "react-hot-toast";

const Notecard = ({ note, setNote }) => {
  const handleDelete = async (e, noteId) => {
    e.preventDefault();
    if (!window.confirm("Supprimer cette note ?")) return;

    try {
      await api.delete(`/note/${noteId}`);
      setNote((prev) => prev.filter((n) => n._id !== noteId));
      toast.success("Note supprimée !");
    } catch (error) {
      toast.error("Erreur lors de la suppression");
    }
  };


  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="card-body">
        <Link to={`/note/${note._id}`} className="hover:underline">
          <h3 className="card-title text-lg">{note.title}</h3>
        </Link>
        <p className="text-sm text-gray-400">{note.content}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex gap-3 items-center">
            <Link to={`/note/${note._id}/`} className="btn btn-sm btn-outline">
              <PenSquare className="w-4 h-4" />
            </Link>
            <button
              onClick={(e) => handleDelete(e, note._id)}
              className="btn btn-sm btn-error btn-outline"
            >
              <Trash2Icon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notecard;
