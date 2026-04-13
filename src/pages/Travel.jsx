import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { districtsData } from '../data/districtsData'
import { districtLinks } from '../data/districtRoutes'

const districtCards = districtLinks.map((district) => ({
  ...district,
  description: districtsData[district.id].description,
  image: districtsData[district.id].topAttractions?.[0]?.img,
  attractionCount: districtsData[district.id].topAttractions?.length ?? 0,
}))

export default function Travel() {
  return (
    <div>
      <section
        className="relative h-[60vh] flex items-end pb-16 px-6"
        style={{
          backgroundImage: "url('/travel/Luing Garden.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-gold-400 text-xs uppercase tracking-[0.35em] font-body mb-2">
            Explore Districts
          </p>
          <h1
            className="text-5xl md:text-7xl font-display font-semibold text-cream max-w-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Choose a District to Start Your Journey
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionTitle
          tag="Travel Guide"
          title="Sikkim Districts"
          sub="Choose a district and begin your journey through its iconic spots, culture, and breathtaking landscapes"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {districtCards.map((district) => (
            <Link
              key={district.id}
              to={district.to}
              className="card-3d group bg-cream rounded-3xl overflow-hidden shadow-lg border border-gold-300/20"
            >
              <div className="relative h-64 img-zoom overflow-hidden">
                {district.image && (
                  <img
                    src={district.image}
                    alt={district.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3
                    className="text-3xl font-display font-semibold text-cream"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {district.name}
                  </h3>
                  <p className="text-cream/90 text-sm font-body mt-2">
                    {district.attractionCount} attractions available
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-forest-500 font-body leading-relaxed">{district.description}</p>
                <span className="inline-block mt-4 text-gold-600 font-body font-semibold">
                  Explore {district.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
