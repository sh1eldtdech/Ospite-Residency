import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import useReveal from '../components/useReveal'

const rooms = [
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    tagline: 'Premium Himalayan Views',
    desc: 'Spacious and elegantly designed rooms with scenic greenery views. Equipped with modern amenities including free Wi-Fi for a comfortable and premium stay.',
    img: '/hotel/docx_03.jpeg',
    price: { ep: 2000, cp: 2200, map: 2500, ap: 2800 },
    perks: ['Greenery Views', 'Free Wi-Fi', 'Premium Furnishing', 'Attached Washroom', 'Tea/Coffee Maker'],
    badge: 'Best Value',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tagline: 'Comfortable Nature Retreat',
    desc: 'Cozy and well-furnished rooms offering a pleasant view of nature. Ideal for guests seeking comfort with all essential facilities, including free Wi-Fi.',
    img: '/hotel/docx_06.jpeg',
    price: { ep: 1800, cp: 2000, map: 2300, ap: 2600 },
    perks: ['Nature Views', 'Free Wi-Fi', 'Well-Furnished', 'Attached Washroom', 'Housekeeping'],
    badge: null,
  },
  {
    id: 'standard',
    name: 'Standard Room',
    tagline: 'Smart & Budget-Friendly',
    desc: 'Comfortable and budget-friendly rooms designed to meet all basic needs of guests, including free Wi-Fi.',
    img: '/hotel/docx_07.jpeg',
    price: { ep: 1500, cp: 1700, map: 2000, ap: 2300 },
    perks: ['Free Wi-Fi', 'Attached Washroom', 'Daily Housekeeping', '24×7 Hot Water', 'Power Backup'],
    badge: 'Most Affordable',
  },
]

const plans = [
  { key: 'ep', label: 'EP', desc: 'Room Only' },
  { key: 'cp', label: 'CP', desc: 'Room + Breakfast' },
  { key: 'map', label: 'MAP', desc: 'Room + Breakfast + Dinner' },
  { key: 'ap', label: 'AP', desc: 'Room + All Meals' },
]

export default function Rooms() {
  const [activePlan, setActivePlan] = useState('cp')
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[55vh] flex items-end pb-16 px-6"
        style={{
          backgroundImage: "url('/hotel/docx_03.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-gold-400 text-xs uppercase tracking-[0.35em] font-body mb-2">Accommodations</p>
          <h1
            className="text-5xl md:text-7xl font-display font-semibold text-cream"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our <span className="italic text-gold-400">Rooms</span>
          </h1>
        </div>
      </section>

      {/* Plan selector */}
      <section className="bg-forest-700 py-8 px-6 sticky top-[64px] z-30">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-cream/50 font-body mb-4">Select Meal Plan</p>
          <div className="flex flex-wrap justify-center gap-3">
            {plans.map(({ key, label, desc }) => (
              <button
                key={key}
                onClick={() => setActivePlan(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  activePlan === key
                    ? 'bg-gold-500 text-forest-900 shadow-lg scale-105'
                    : 'border border-cream/20 text-cream/70 hover:border-gold-500/50'
                }`}
              >
                <span className="font-semibold">{label}</span>
                <span className="ml-2 text-xs opacity-70 hidden sm:inline">— {desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Room cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div ref={r1} className="reveal">
          <SectionTitle tag="Accommodations" title="Choose Your Perfect Room" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="card-3d bg-cream rounded-3xl overflow-hidden shadow-lg flex flex-col relative">
              {room.badge && (
                <div className="absolute top-4 right-4 z-10 bg-gold-500 text-forest-900 text-xs font-body font-bold px-3 py-1 rounded-full">
                  {room.badge}
                </div>
              )}
              <div className="h-56 img-zoom overflow-hidden">
                <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-body mb-1">{room.tagline}</p>
                <h3
                  className="text-2xl font-display font-semibold text-forest-800 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {room.name}
                </h3>
                <p className="text-sm text-forest-500 font-body leading-relaxed mb-5">{room.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.perks.map((p) => (
                    <span key={p} className="text-xs bg-forest-50 text-forest-700 px-3 py-1 rounded-full font-body">
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-xs text-forest-400 font-body uppercase tracking-wider mb-0.5">
                        {plans.find(p => p.key === activePlan)?.label} Plan
                      </p>
                      <p className="text-3xl font-display font-semibold text-forest-800" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        ₹{room.price[activePlan]}
                        <span className="text-sm font-body font-normal text-forest-400"> /night</span>
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="btn-gold w-full block text-center py-3 rounded-xl text-forest-900 font-body font-semibold text-sm"
                  >
                    Book This Room
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tariff Table */}
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={r2} className="reveal">
            <SectionTitle tag="Pricing" title="Full Tariff Details" sub="All prices in INR per room per night." />
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-xl">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-forest-700 text-cream">
                  <th className="px-6 py-4 text-left font-semibold tracking-wide">Category</th>
                  {plans.map(({ key, label, desc }) => (
                    <th key={key} className="px-4 py-4 text-center font-semibold">
                      <span className="block text-gold-400">{label}</span>
                      <span className="text-xs text-cream/50 font-normal">{desc}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, i) => (
                  <tr key={room.id} className={i % 2 === 0 ? 'bg-cream' : 'bg-forest-50'}>
                    <td className="px-6 py-4 font-semibold text-forest-800">{room.name}</td>
                    {plans.map(({ key }) => (
                      <td key={key} className="px-4 py-4 text-center text-forest-700 font-medium">₹{room.price[key]}</td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-forest-50 border-t-2 border-gold-300">
                  <td className="px-6 py-4 font-semibold text-forest-800">Extra Bed</td>
                  <td className="px-4 py-4 text-center text-forest-700">₹500</td>
                  <td className="px-4 py-4 text-center text-forest-700">₹700</td>
                  <td className="px-4 py-4 text-center text-forest-700">₹1,000</td>
                  <td className="px-4 py-4 text-center text-forest-700">₹1,300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-forest-400 font-body mt-6">
            * Prices are indicative and may vary. Please contact us for exact rates and availability.
          </p>
        </div>
      </section>

      {/* Dining & Parking */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle tag="Facilities" title="Dining & Parking" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-3d bg-cream rounded-3xl overflow-hidden shadow-lg">
            <div className="h-56 img-zoom overflow-hidden">
              <img
                src="/hotel/docx_08.jpeg"
                alt="Dining"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-semibold text-forest-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Dining Hall
              </h3>
              <p className="text-sm text-forest-500 font-body leading-relaxed">
                An elegant dining space with a seating capacity of around 30 guests, serving delicious 
                <strong className="text-forest-700"> Bengali and local cuisines</strong> for an authentic 
                culinary experience.
              </p>
            </div>
          </div>
          <div className="card-3d bg-cream rounded-3xl overflow-hidden shadow-lg">
            <div className="h-56 img-zoom overflow-hidden">
              <img
                src="/hotel/docx_09.jpeg"
                alt="Parking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-semibold text-forest-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Parking Facility
              </h3>
              <p className="text-sm text-forest-500 font-body leading-relaxed">
                Ample parking space available for in-house guests. A perfect stopover for biking 
                enthusiasts exploring mountainous terrains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
