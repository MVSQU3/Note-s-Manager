import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimiteUI";
import Notecard from "../components/Notecard";
import NoteNotFound from "../components/NoteNotFound";
import api from "../lib/axios";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [isRateLimit, setIsRateLimit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/note");
        console.log(res.data);
        setNotes(res.data || []);
        setIsRateLimit(false);
      } catch (err) {
        if (err.response?.status === 429) {
          setIsRateLimit(true);
        } else {
          toast.error("Erreur lors du chargement des notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent relative z-10 text-white">
      <NavBar />
      <main className="max-w-6xl mx-auto p-6">
        {isRateLimit ? (
          <RateLimitedUI />
        ) : Array.isArray(notes) && notes.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {notes.map((note) => (
              <Notecard note={note} key={note._id} setNote={setNotes} />
            ))}
          </div>
        ) : (
          <NoteNotFound />
        )}
      </main>
    </div>
  );
};

export default HomePage;
