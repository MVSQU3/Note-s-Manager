import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(async () => {
        console.log("Connecté à MongoDB");
      })
      .catch((error) => {
        console.log("Echec de connexion à la db", error);
      });
  } catch (error) {
    console.error("Erreur connexion MongoDB:", error);
    process.exit(1);
  }
};
export default connectDb;
