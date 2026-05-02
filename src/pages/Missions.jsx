import { missions } from "../data/missions";
import MissionCard from "../components/MissionCard";
import { useSearchParams } from "react-router-dom";

function Missions({ searchText = "" }) {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get("status");
  const normalizedSearch = searchText.trim().toLowerCase();

  const normalizedStatus = statusFilter ? statusFilter.toLowerCase() : null;
  const filteredByStatus = normalizedStatus
    ? missions.filter((mission) => mission.status.toLowerCase() === normalizedStatus)
    : missions;

  const filteredMissions = normalizedSearch
    ? filteredByStatus.filter((mission) => {
      const missionName = mission.name.toLowerCase();
      const agencyName = mission.agency.toLowerCase();
      return missionName.includes(normalizedSearch) || agencyName.includes(normalizedSearch);
    })
    : filteredByStatus;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        All Space Missions
      </h1>

      <p className="text-gray-400 mb-8">
        Browse upcoming and past space missions from global agencies.
      </p>

      {/* Future: Filters saved in DB for returning users. */}
      {/* Future: Personalized views and saved searches. */}
      {statusFilter && (
        <p className="text-sm text-blue-400 mb-6">
          Filter: {statusFilter}
        </p>
      )}
      {normalizedSearch && (
        <p className="text-sm text-blue-300 mb-6">
          Search: "{searchText}"
        </p>
      )}

      {filteredMissions.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-gray-400">
          No missions found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMissions.map((mission) => (
            <MissionCard
              key={mission.id}
              mission={mission}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Missions;
