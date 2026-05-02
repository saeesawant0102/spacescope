import { Link } from "react-router-dom";
import { upcomingLaunches } from "../data/overviewData";
import { news } from "../data/news";

function Overview() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400">Active Missions</p>
            <p className="text-3xl font-bold mt-2">128</p>
            <p className="text-xs text-green-400 mt-1">+12 this year</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-sm text-gray-400 mb-4">Upcoming Launches</h3>

            <ul className="space-y-3 text-sm">
              {upcomingLaunches.map((launch, i) => (
                <li key={i} className="flex justify-between gap-4">
                  <div>
                    <p className="font-medium">{launch.name}</p>
                    <p className="text-xs text-gray-400">{launch.vehicle}</p>
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm">{launch.date}</span>
                </li>
              ))}
            </ul>

            <Link to="/missions" className="inline-block text-xs text-blue-400 mt-4 hover:text-blue-300">
              See all missions -&gt;
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-sm text-gray-400 mb-4">Latest Space News</h3>

          <ul className="space-y-4 text-sm">
            {news.slice(0, 3).map((item) => (
              <li key={item.id}>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </li>
            ))}
          </ul>

          <Link to="/news" className="inline-block text-xs text-blue-400 mt-4 hover:text-blue-300">
            View all news -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Overview;
