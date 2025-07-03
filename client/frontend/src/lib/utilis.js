export function formatDate(date) {
  return date.toLocaleDateString("fr-FR", {
    month: "short", // Affiche le mois en abrégé (ex: "Jan", "Feb")
    day: "numeric", // Affiche le jour (ex: 1, 12, 31)
    year: "numeric", // Affiche l'année (ex: 2025)
  });
}
