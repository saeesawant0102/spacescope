import { useParams, useNavigate } from "react-router-dom";
import { missions } from "../data/missions";

function MissionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mission = missions.find((m) => m.id === Number(id));

  if (!mission) {
    return (
      <div className="p-10 text-white bg-black min-h-screen">
        Mission not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-800 px-4 py-2 rounded"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{mission.name}</h1>
      <p>Agency: {mission.agency}</p>
      <p>Date: {mission.date}</p>
      <p>Status: {mission.status}</p>
    </div>
  );
}

export default MissionDetails;
