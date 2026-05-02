import { useNavigate } from "react-router-dom";

function MissionCard({ mission }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/missions/${mission.id}`)}
      className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    >
      <div className="flex flex-col justify-between h-full min-h-[200px]">
        <div>
          <h2 className="text-xl font-semibold mb-3 leading-snug">
            {mission.name}
          </h2>

          <p className="text-sm text-gray-400">
            {mission.agency}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {mission.date}
          </p>
        </div>

        <span className="inline-block mt-6 text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 w-fit">
          {mission.status}
        </span>
      </div>
    </div>
  );
}

export default MissionCard;
