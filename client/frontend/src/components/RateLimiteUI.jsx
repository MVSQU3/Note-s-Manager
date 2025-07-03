import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-base-100 border border-primary rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row items-center p-6 gap-4">
          <div className="bg-primary/20 p-4 rounded-full">
            <ZapIcon className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-1">Limite atteinte</h3>
            <p className="text-sm text-base-content">
              Trop de requêtes en peu de temps. Veuillez patienter un instant.
            </p>
            <p className="text-xs text-base-content/60">
              Réessayez dans quelques secondes pour continuer à utiliser l'application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
