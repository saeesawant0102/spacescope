import { Link, NavLink } from "react-router-dom";

const navConfig = [
  {
    label: "Missions",
    items: [
      { label: "All Missions", to: "/missions" },
      { label: "Upcoming", to: "/missions?status=upcoming" },
      { label: "Completed", to: "/missions?status=completed" },
      { label: "Failed", to: "/missions?status=failed" },
      { label: "Timeline View", to: "/missions/timeline" },
      { label: "Favorites", to: "/favorites" },
    ],
  },
  {
    label: "Agencies",
    items: [
      { label: "All Agencies", to: "/agencies" },
      { label: "NASA", to: "/agencies/nasa" },
      { label: "SpaceX", to: "/agencies/spacex" },
      { label: "ISRO", to: "/agencies/isro" },
      { label: "ESA", to: "/agencies/esa" },
      { label: "CNSA", to: "/agencies/cnsa" },
    ],
  },
  {
    label: "Tracker",
    items: [
      { label: "ISS Live Tracker", to: "/tracker/iss" },
      { label: "Upcoming Launch Countdown", to: "/tracker/launches" },
      { label: "Launch Map", to: "/tracker/map" },
      { label: "Mission Progress Tracker", to: "/tracker/progress" },
    ],
  },
  {
    label: "Explore",
    items: [
      { label: "Mission Timeline", to: "/explore/timeline" },
      { label: "Space News", to: "/explore/news" },
      { label: "Deep Space Missions", to: "/explore/deep-space" },
      { label: "Crewed Missions", to: "/explore/crewed" },
      { label: "Satellite Missions", to: "/explore/satellites" },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Analytics Overview", to: "/analytics" },
      { label: "Agency Comparison", to: "/insights/agency" },
      { label: "Launch Trends", to: "/insights/trends" },
      { label: "Mission Success Rates", to: "/insights/success" },
      { label: "Yearly Growth", to: "/insights/growth" },
    ],
  },
];

function Dropdown({ label, items }) {
  return (
    <div className="relative group">
      <button className="text-sm text-white bg-blue-900/35 hover:bg-blue-900/55 px-3 py-1.5 rounded-md transition-colors">
        {label} <span className="text-xs text-white/80">v</span>
      </button>

      <div className="absolute left-0 top-full pt-3 z-50 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
        <div className="w-64 rounded-xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/60 overflow-hidden">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-3 text-sm text-gray-100 hover:text-blue-200 hover:bg-blue-600/20 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar({ searchText, onSearchChange }) {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-x-6 gap-y-2 flex-wrap md:flex-nowrap overflow-visible">
        <Link to="/" className="font-bold text-white tracking-wide">
          SpaceScope
        </Link>

        <NavLink to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
          Home
        </NavLink>

        {navConfig.map((group) => (
          <Dropdown key={group.label} label={group.label} items={group.items} />
        ))}

        <NavLink to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
          About
        </NavLink>

        <div className="ml-auto w-full md:w-auto">
          <input
            type="text"
            placeholder="Search missions..."
            value={searchText}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full md:w-64 bg-gray-950 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
