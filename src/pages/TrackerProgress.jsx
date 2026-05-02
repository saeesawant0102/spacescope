import PlaceholderPage from "../components/PlaceholderPage";

function TrackerProgress() {
  return (
    <PlaceholderPage
      title="Mission Progress Tracker"
      description="Follow stage-by-stage progress from launch prep to orbit insertion and mission completion."
    >
      {/* Future: Launch data API integration. */}
      <p className="text-gray-300">
        Progress timelines, checkpoints, and event telemetry placeholders will be displayed here.
      </p>
    </PlaceholderPage>
  );
}

export default TrackerProgress;
