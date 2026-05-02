import { news } from "../data/news";

function News() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-3">Space News</h1>
      <p className="text-gray-400 mb-8">
        Latest mission, launch, and agency updates from around the world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((item) => (
          <article
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-200 hover:border-blue-500 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">
                {item.agency}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>

            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default News;
