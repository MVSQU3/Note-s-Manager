import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import NavBar from "../components/NavBar";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      return toast.error("Veuillez remplir tous les champs");
    }

    setLoading(true);
    try {
      await api.post("/note", { title, content });
      toast.success("Note créée avec succès");
      navigate("/");
    } catch {
      toast.error("Erreur lors de la création");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 relative z-10 text-white">
      <NavBar />
      <main className="max-w-3xl mx-auto p-6 bg-base-100 rounded-lg shadow-md mt-8">
        <Link to="/" className="btn btn-ghost flex items-center gap-2 mb-6 w-40">
          <ArrowLeftIcon className="w-5 h-5" />
          Retour aux notes
        </Link>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Créer une nouvelle note
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Titre
            </label>
            <input
              type="text"
              placeholder="Titre de la note"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              content
            </label>
            <textarea
              placeholder="Écris ta note ici..."
              className="textarea textarea-bordered w-full h-40"
              value={content}
              onChange={(e) => setcontent(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-full"
            disabled={loading}
          >
            {loading ? "Création en cours..." : "Créer la note"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreatePage;
