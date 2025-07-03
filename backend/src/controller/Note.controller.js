import Note from "../model/Note.js";

// Créer une nouvelle note
export const createNote = async (req, res) => {
  try {
    // const { title, content, userId } = req.body;

    const newNote = new Note(req.body);
    await newNote.save();

    res.status(201).json({ message: "Note créée avec succès", note: newNote });
  } catch (error) {
    console.error("Erreur création note :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Récupérer toutes les notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().select('-__v').populate('userId', 'name email');
    res.status(200).json(notes);
  } catch (error) {
    console.error("Erreur récupération notes :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Récupérer une note par ID
export const getNoteById = async (req, res) => {
  try {
    const id = req.params.id
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note non trouvée" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Erreur récupération note :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};



// Mettre à jour une note
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note non trouvée" });
    }

    res.status(200).json({ message: "Note mise à jour", note });
  } catch (error) {
    console.error("Erreur mise à jour note :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Supprimer une note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note non trouvée" });
    }

    res.status(200).json({ message: "Note supprimée avec succès" });
  } catch (error) {
    console.error("Erreur suppression note :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
