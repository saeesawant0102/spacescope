import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MissionCard from "../components/MissionCard";
import { agencies } from "../data/agencies";

function AgencyMissions() {
  const { agencyId } = useParams();
  const agency = agencies.find((item) => item.id === agencyId);

  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/missions")
      .then((res) => res.json())
      .then((data) => {
        setMissions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching missions:", err);
        setLoading(false);
      });
  }, []);

  if (!agency) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Agency not found</h1>
        <Link to="/agencies" className="text-blue-400 hover:text-blue-300 text-sm">
          Back to agencies
        </Link>
      </div>
    );
  }

  const agencyMissions = missions.filter(
    (mission) => mission.agency === agency.name
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link to="/agencies" className="text-blue-400 hover:text-blue-300 text-sm">
        &lt;- All agencies
      </Link>

      <h1 className="text-3xl font-bold mt-4">{agency.name} Missions</h1>
      <p className="text-gray-400 mt-3 mb-8">{agency.summary}</p>

      {loading ? (
        <p className="text-gray-400">Loading missions...</p>
      ) : (
        <>
          <p className="text-sm text-blue-400 mb-6">
            {agencyMissions.length} missions found
          </p>

          {agencyMissions.length === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-gray-400">
              No missions available for this agency yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agencyMissions.map((mission, index) => (
                <MissionCard key={index} mission={mission} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AgencyMissions;