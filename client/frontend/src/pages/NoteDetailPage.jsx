import { useParams, useNavigate,Link } from "react-router";
import { useEffect, useState } from "react";
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from "lucide-react";
import NavBar from "../components/NavBar";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/note/${id}`);
        setNote(res.data);
      } catch (err) {
        toast.error("Échec du chargement de la note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette note ?")) return;

    try {
      await api.delete(`/note/${id}`);
      toast.success("Note supprimée !");
      navigate("/");
    } catch {
      toast.error("Erreur lors de la suppression");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    setSaving(true);

    try {
      await api.put(`/note/${id}`, note);
      toast.success("Note mise à jour !");
      navigate("/");
    } catch {
      toast.error("Erreur lors de la mise à jour");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 relative z-10 text-white">
      <NavBar />
      <main className="max-w-3xl mx-auto p-6">
        <div className="flex justify-between mb-6">
          <Link to="/" className="btn btn-ghost flex items-center gap-2">
            <ArrowLeftIcon className="w-5 h-5" />
            Retour aux notes
          </Link>
          <button
            className="btn btn-error flex items-center gap-2"
            onClick={handleDelete}
          >
            <Trash2Icon className="w-5 h-5" />
            Supprimer la note
          </button>
        </div>
        <main className="max-w-3xl mx-auto p-6 bg-base-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Modifier la note
          </h2>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Titre
            </label>
            <input
              type="text"
              placeholder="Titre de la note"
              className="input input-bordered w-full"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Écris ta note ici..."
              className="textarea textarea-bordered w-full h-40"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
              required
            />
          </div>

          <button
            className="btn btn-primary w-full"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Sauvegarde..." : "Enregistrer les modifications"}
          </button>
        </main>
      </main>
    </div>
  );
};

export default NoteDetailPage;
