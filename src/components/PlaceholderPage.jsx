function PlaceholderPage({ title, description, children }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-gray-400 mt-3 max-w-3xl">{description}</p>
      </header>
      <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">{children}</div>
    </section>
  );
}

export default PlaceholderPage;
