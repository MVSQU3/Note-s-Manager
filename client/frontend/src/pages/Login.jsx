import React, { useState } from "react";
import api from "../lib/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/register", { email, password });
      // Ici tu peux stocker le token ou rediriger l'utilisateur
      alert("Connexion réussie !");
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la connexion");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 border rounded"
    >
      <h2 className="text-2xl mb-4">Connexion</h2>
      {error && <div className="mb-2 text-red-600">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1">Email :</label>
        <input
          type="email"
          className="w-full border px-2 py-1 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Mot de passe :</label>
        <input
          type="password"
          className="w-full border px-2 py-1 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Se connecter
      </button>
    </form>
  );
}

export default Login;
