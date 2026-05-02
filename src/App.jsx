import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Countdown from "./components/Countdown";
import Missions from "./pages/Missions";
import MissionDetails from "./pages/MissionDetails";
import Agencies from "./pages/Agencies";
import AgencyMissions from "./pages/AgencyMissions";
import MissionsTimeline from "./pages/MissionsTimeline";
import Favorites from "./pages/Favorites";
import TrackerIss from "./pages/TrackerIss";
import TrackerLaunches from "./pages/TrackerLaunches";
import TrackerMap from "./pages/TrackerMap";
import TrackerProgress from "./pages/TrackerProgress";
import ExploreTimeline from "./pages/ExploreTimeline";
import ExploreDeepSpace from "./pages/ExploreDeepSpace";
import ExploreCrewed from "./pages/ExploreCrewed";
import ExploreSatellites from "./pages/ExploreSatellites";
import InsightsAgency from "./pages/InsightsAgency";
import InsightsTrends from "./pages/InsightsTrends";
import InsightsSuccess from "./pages/InsightsSuccess";
import InsightsGrowth from "./pages/InsightsGrowth";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import News from "./pages/News";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar searchText={searchText} onSearchChange={setSearchText} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Overview />
              <Countdown />
            </>
          }
        />
        <Route path="/missions" element={<Missions searchText={searchText} />} />
        <Route path="/missions/:id" element={<MissionDetails />} />
        <Route path="/missions/timeline" element={<MissionsTimeline />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/agencies/:agencyId" element={<AgencyMissions />} />
        <Route path="/tracker/iss" element={<TrackerIss />} />
        <Route path="/tracker/launches" element={<TrackerLaunches />} />
        <Route path="/tracker/map" element={<TrackerMap />} />
        <Route path="/tracker/progress" element={<TrackerProgress />} />
        <Route path="/explore/timeline" element={<ExploreTimeline />} />
        <Route path="/explore/news" element={<News />} />
        <Route path="/explore/deep-space" element={<ExploreDeepSpace />} />
        <Route path="/explore/crewed" element={<ExploreCrewed />} />
        <Route path="/explore/satellites" element={<ExploreSatellites />} />
        <Route path="/insights/agency" element={<InsightsAgency />} />
        <Route path="/insights/trends" element={<InsightsTrends />} />
        <Route path="/insights/success" element={<InsightsSuccess />} />
        <Route path="/insights/growth" element={<InsightsGrowth />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
