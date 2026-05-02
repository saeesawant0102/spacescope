import PlaceholderPage from "../components/PlaceholderPage";

function Favorites() {
  return (
    <PlaceholderPage
      title="Favorite Missions"
      description="Save and organize missions you want to track closely."
    >
      {/* Future: Saved searches and personalized views. */}
      <p className="text-gray-300">
        Your bookmarked missions and watchlist alerts will appear on this page.
      </p>
    </PlaceholderPage>
  );
}

export default Favorites;
