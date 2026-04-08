import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import useReveal from "../components/useReveal";

const amenities = [
  { icon: "☕", label: "Tea/Coffee Maker" },
  { icon: "🧹", label: "Daily Housekeeping" },
  { icon: "🚿", label: "24×7 Hot & Cold Water" },
  { icon: "🍽️", label: "Dining Facility" },
  { icon: "⚡", label: "Power Backup" },
  { icon: "📶", label: "Free Wi-Fi All Floors" },
  { icon: "👕", label: "Laundry Service" },
  { icon: "🥐", label: "Buffet Breakfast" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "🚗", label: "Pick-up & Drop" },
];

const photos = [
  "/travel/banjhakrifalls.jpg",
  "/travel/Tashi View Point.jpg",
  "/travel/Luing Garden.jpg",
];

export default function Home() {
  const amenitiesRef = useReveal();
  const statsRef = useReveal();
  const gallRef = useReveal();

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/hotel/docx_01.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-900/50 to-forest-900/80" />

        <div className="relative z-10 text-center text-cream px-6 max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold-400 font-body mb-6 animate-fadeUp">
            Suhim Colony, Sichey · Gangtok, Sikkim
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-none mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Welcome to <br />
            <span className="text-gold-400 italic font-medium">
              Comfort
            </span>{" "}
            &amp;{" "}
            <span className="text-gold-400 italic font-medium">Serenity</span>
          </h1>
          <p className="text-base md:text-xl font-body text-cream/70 mt-6 mb-10 max-w-xl mx-auto leading-relaxed">
            A home away from home — nestled in the peaceful Himalayan
            surroundings, just 3 km from Gangtok's heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rooms"
              className="btn-gold px-8 py-4 rounded-full text-forest-900 font-body font-semibold tracking-wide text-sm"
            >
              Explore Rooms
            </Link>
            <Link
              to="/contact"
              className="border border-cream/40 px-8 py-4 rounded-full text-cream font-body font-medium text-sm hover:bg-cream/10 transition-colors duration-300"
            >
              Book a Stay
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-cream/40 text-xs tracking-widest uppercase font-body">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500/60 to-transparent animate-float" />
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section ref={statsRef} className="reveal bg-forest-700 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "3", unit: "km", label: "From Main Town" },
            { num: "3", unit: "+", label: "Room Categories" },
            { num: "30", unit: "+", label: "Dining Seats" },
            { num: "10", unit: "+", label: "Amenities" },
          ].map(({ num, unit, label }) => (
            <div key={label}>
              <p
                className="text-4xl md:text-5xl font-display font-semibold text-gold-400"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {num}
                <span className="text-gold-500/70 text-3xl">{unit}</span>
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-cream/50 font-body mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-600 font-body font-semibold mb-4">
              About Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-display font-semibold text-forest-800 mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your Himalayan
              <br />
              <span className="italic text-forest-600">Retreat Awaits</span>
            </h2>
            <p className="text-base text-forest-600 font-body leading-relaxed mb-4">
              Hotel Ospite Residency is nestled in the peaceful surroundings of
              Suhim Colony, Sichey — just 3 km away from Gangtok's bustling main
              town. Offering a homely atmosphere with breathtaking natural
              views, we're an ideal retreat for travellers seeking comfort and
              tranquillity.
            </p>
            <p className="text-base text-forest-600 font-body leading-relaxed mb-8">
              Conveniently located near Ban Jhakri Falls Park, Tashi View Point,
              Gonjang Monastery and Luing Garden, and only a 7-minute drive from
              STNM Hospital.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-body font-semibold text-forest-700 border-b border-gold-500 pb-0.5 hover:text-gold-600 transition-colors"
            >
              Discover Our Story →
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden img-zoom shadow-2xl">
              <img
                src="/hotel/docx_03.jpeg"
                alt="Hotel exterior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold-500 text-forest-900 px-6 py-4 rounded-xl shadow-xl font-body">
              <p className="text-2xl font-bold">₹1,500</p>
              <p className="text-xs font-medium">Starting per night</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={amenitiesRef} className="reveal">
            <SectionTitle
              tag="What We Offer"
              title="Premium Amenities"
              sub="Everything you need for a perfect stay — thoughtfully arranged for your comfort."
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {amenities.map(({ icon, label }) => (
              <div
                key={label}
                className="icon-tilt bg-cream rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <p className="text-xs font-body font-medium text-forest-700 leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div ref={gallRef} className="reveal">
          <SectionTitle
            tag="Gallery"
            title="Glimpses of Gangtok"
            sub="Experience the majestic beauty surrounding Hotel Ospite Residency."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <div
              key={i}
              className="card-3d rounded-2xl overflow-hidden img-zoom aspect-[4/3] shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/travel"
            className="btn-gold inline-block px-8 py-3.5 rounded-full text-forest-900 font-body font-semibold text-sm"
          >
            Explore Nearby Attractions
          </Link>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="relative py-32 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: "url('/hotel/docx_02.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-forest-900/75" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-6xl font-display font-semibold text-cream mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Perfect Stay Awaits
          </h2>
          <p className="text-cream/70 font-body mb-10 text-lg italic">
            "A home away from home."
          </p>
          <Link
            to="/contact"
            className="btn-gold px-10 py-4 rounded-full text-forest-900 font-body font-semibold tracking-wide"
          >
            Reserve Your Room
          </Link>
        </div>
      </section>
    </div>
  );
}
