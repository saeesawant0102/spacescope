import PlaceholderPage from "../components/PlaceholderPage";

function InsightsAgency() {
  return (
    <PlaceholderPage
      title="Agency Comparison"
      description="Compare agency-level mission output, focus areas, and launch cadence."
    >
      {/* Future: Agency stats API integration. */}
      <p className="text-gray-300">
        Comparative insight modules and scoring breakdowns will be shown here.
      </p>
    </PlaceholderPage>
  );
}

export default InsightsAgency;
