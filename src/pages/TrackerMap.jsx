import PlaceholderPage from "../components/PlaceholderPage";

const launchSites = [
  "Cape Canaveral",
  "Baikonur",
  "Sriharikota",
  "Vandenberg",
];

function TrackerMap() {
  return (
    <PlaceholderPage
      title="Global Launch Map"
      description="Explore major launch sites and visualize global mission activity."
    >
      {/* Future: Launch data API integration. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {launchSites.map((site) => (
          <div key={site} className="bg-gray-950 border border-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-200 font-medium">{site}</p>
            <p className="text-xs text-gray-500 mt-2">Site activity placeholder</p>
          </div>
        ))}
      </div>

      <div className="h-80 rounded-2xl border border-dashed border-gray-700 bg-gray-950 flex items-center justify-center text-gray-500">
        Map Container Placeholder
      </div>
    </PlaceholderPage>
  );
}

export default TrackerMap;
