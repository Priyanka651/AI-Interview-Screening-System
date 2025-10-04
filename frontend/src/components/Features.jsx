export default function Features() {
  const features = [
    {
      title: "Higher Quality Jobs",
      text: "Every job is hand-screened to ensure it’s legitimate and professional.",
    },
    {
      title: "Personalized Tools",
      text: "Save jobs, set alerts, and use advanced search filters.",
    },
    {
      title: "Save Time",
      text: "We do the research so you can focus on applying.",
    },
  ];

  return (
    <section className="px-8 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-xl font-bold text-blue-600">{f.title}</h4>
            <p className="mt-3 text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
