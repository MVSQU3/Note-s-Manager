import User from "../model/User.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password }).save();
    res.status(201).json({ message: "Utilisateur créé avec succès", user });
  } catch (error) {
    console.error("Erreur création utilisateur :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v -password");
    res.status(200).json(users);
  } catch (error) {
    console.error("Erreur récupération utilisateurs :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
