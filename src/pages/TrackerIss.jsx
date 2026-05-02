import PlaceholderPage from "../components/PlaceholderPage";

function TrackerIss() {
  const stats = [
    "Latitude",
    "Longitude",
    "Speed",
    "Altitude",
    "Next Visible Pass",
  ];

  return (
    <PlaceholderPage
      title="ISS Live Tracker"
      description="Real-time International Space Station position and pass predictions."
    >
      {/* Future: Fetch ISS data from backend (FastAPI proxy to Open Notify API). */}
      {/* Future: Caching ISS API responses. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {stats.map((label) => (
          <div key={label} className="bg-gray-950 border border-gray-800 rounded-xl p-4">
            <p className="text-xs text-gray-400">{label}</p>
            <p className="text-lg font-semibold mt-2 text-gray-200">--</p>
          </div>
        ))}
      </div>

      <div className="h-72 rounded-2xl border border-dashed border-gray-700 bg-gray-950 flex items-center justify-center text-gray-500">
        ISS Map Placeholder
      </div>
    </PlaceholderPage>
  );
}

export default TrackerIss;
