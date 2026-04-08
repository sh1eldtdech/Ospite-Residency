import SectionTitle from "../components/SectionTitle";
import useReveal from "../components/useReveal";

const attractions = [
  {
    name: "Ban Jhakri Falls Park",
    distance: "4 km",
    time: "10 min",
    desc: "A spectacular waterfall park featuring the mythical Ban Jhakri shaman figure, lush gardens, and an adventure zone.",
    img: "/travel/banjhakrifalls.jpg",
    category: "Nature",
  },
  {
    name: "Tashi View Point",
    distance: "8 km",
    time: "15 min",
    desc: "One of the best spots to witness the majestic Kanchenjunga peak and the stunning Gangtok skyline.",
    img: "/travel/Tashi View Point.jpg",
    category: "Viewpoint",
  },
  {
    name: "Gonjang Monastery",
    distance: "5 km",
    time: "12 min",
    desc: "A serene Buddhist monastery offering spiritual calm and panoramic mountain views perfect for meditation.",
    img: "/travel/Gonjang Monastery.jpg",
    category: "Spiritual",
  },
  {
    name: "Luing Garden",
    distance: "6 km",
    time: "13 min",
    desc: "A beautiful garden adorned with seasonal flowers, orchids, and Himalayan flora — ideal for a leisurely stroll.",
    img: "/travel/Luing Garden.jpg",
    category: "Garden",
  },
  {
    name: "MG Marg",
    distance: "3 km",
    time: "7 min",
    desc: "Gangtok's vibrant pedestrian boulevard lined with shops, cafes, and local eateries.",
    img: "/travel/MG Marg.jpg",
    category: "Shopping",
  },
  {
    name: "Rumtek Monastery",
    distance: "24 km",
    time: "45 min",
    desc: "One of the largest and most important monasteries in Sikkim, seat of the Karma Kagyu lineage.",
    img: "/travel/Rumtek Monastery.jpg",
    category: "Spiritual",
  },
];

const tips = [
  {
    icon: "🌡️",
    title: "Best Season",
    desc: "October–December & March–May offer clear skies and pleasant weather.",
  },
  {
    icon: "🎒",
    title: "Pack Smart",
    desc: "Carry warm layers even in summer — mountain evenings can be cool.",
  },
  {
    icon: "🚗",
    title: "Getting Around",
    desc: "We offer pick-up & drop services. Shared jeeps are popular for inter-city travel.",
  },
  {
    icon: "📜",
    title: "Permits",
    desc: "Indian nationals need an Inner Line Permit for North Sikkim. Apply at Gangtok's SNT stand.",
  },
];

export default function Travel() {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[65vh] flex items-end pb-16 px-6"
        style={{
          backgroundImage: "url('/travel/Luing Garden.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-gold-400 text-xs uppercase tracking-[0.35em] font-body mb-2">
            Explore Gangtok
          </p>
          <h1
            className="text-5xl md:text-7xl font-display font-semibold text-cream max-w-xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Discover the <span className="italic text-gold-400">Magic</span> of
            Sikkim
          </h1>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div ref={r1} className="reveal">
          <SectionTitle
            tag="Nearby Attractions"
            title="Places to Explore"
            sub="All these stunning destinations are within easy reach from Hotel Ospite Residency."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((place) => (
            <div
              key={place.name}
              className="card-3d bg-cream rounded-3xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative h-52 img-zoom overflow-hidden">
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-forest-900 text-xs font-body font-bold px-3 py-1 rounded-full">
                    {place.category}
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-2 text-xs text-forest-400 font-body">
                  <span>📍 {place.distance}</span>
                  <span>🕐 ~{place.time} drive</span>
                </div>
                <h3
                  className="text-xl font-display font-semibold text-forest-800 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {place.name}
                </h3>
                <p className="text-sm text-forest-500 font-body leading-relaxed">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-forest-700 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400 font-body mb-3">
            Find Us
          </p>
          <h2
            className="text-4xl font-display font-semibold text-cream mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We're Easy to Find
          </h2>
          <p className="text-cream/60 font-body mb-8">
            Suhim Colony, Helipad Road, Sichey, Gangtok – 737101
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d88.6138!3d27.3314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a8c5d0001%3A0x0!2sGangtok%2C+Sikkim!5e0!3m2!1sen!2sin!4v1700000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div ref={r2} className="reveal">
          <SectionTitle
            tag="Traveller Tips"
            title="Plan Your Visit"
            sub="Expert advice to make your Gangtok trip unforgettable."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tips.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="icon-tilt bg-parchment rounded-2xl p-7 text-center border border-gold-300/30 shadow-sm"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h4
                className="text-lg font-display font-semibold text-forest-800 mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {title}
              </h4>
              <p className="text-sm text-forest-500 font-body leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
