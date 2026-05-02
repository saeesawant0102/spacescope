import { Link } from "react-router-dom";
import { agencies } from "../data/agencies";
import { missions } from "../data/missions";

function Agencies() {
  // Future: Agency stats API integration.
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Space Agencies</h1>

      <p className="text-gray-400 mb-8">
        Explore major agencies and view missions launched under each organization.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agencies.map((agency) => {
          const missionCount = missions.filter((m) => m.agency === agency.name).length;

          return (
            <Link
              key={agency.id}
              to={`/agencies/${agency.id}`}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300 font-bold flex items-center justify-center">
                  {agency.badge}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{agency.name}</h2>
                  <p className="text-xs text-blue-400 mt-1">{missionCount} missions</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">{agency.summary}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Agencies;
