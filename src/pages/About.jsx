import SectionTitle from '../components/SectionTitle'
import useReveal from '../components/useReveal'

const values = [
  { icon: '🌿', title: 'Nature-Immersed', desc: 'Surrounded by Sikkim\'s lush greenery with breathtaking Himalayan vistas from every room.' },
  { icon: '🏠', title: 'Home-like Warmth', desc: 'We treat every guest as family, offering personalised service and a welcoming atmosphere.' },
  { icon: '🍛', title: 'Authentic Cuisine', desc: 'Savour Bengali and local Sikkimese delicacies prepared fresh in our elegant dining hall.' },
  { icon: '📍', title: 'Prime Location', desc: 'Just 3 km from main Gangtok, close to top attractions, yet blissfully peaceful.' },
]

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-end pb-16 px-6"
        style={{
          backgroundImage: "url('/hotel/docx_09.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-gold-400 text-xs uppercase tracking-[0.35em] font-body mb-2">Our Story</p>
          <h1
            className="text-5xl md:text-7xl font-display font-semibold text-cream"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About <span className="italic text-gold-400">Ospite</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div ref={r1} className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden img-zoom shadow-2xl">
              <img
                src="/hotel/docx_07.jpeg"
                alt="Hotel interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden border-4 border-cream shadow-xl img-zoom">
              <img
                src="/hotel/docx_04.jpeg"
                alt="Gangtok view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <SectionTitle tag="Who We Are" title="Comfort in the Heart of Sikkim" />
            <p className="text-forest-600 font-body leading-relaxed mb-4">
              Hotel Ospite Residency is nestled in the peaceful surroundings of Suhim Colony, Sichey — 
              just 3 km away from Gangtok's bustling main town. The name <em>"Ospite"</em> means 
              "guest" in Italian, reflecting our philosophy: every visitor is an honoured guest.
            </p>
            <p className="text-forest-600 font-body leading-relaxed mb-4">
              We offer a homely atmosphere with breathtaking natural views, making us an ideal retreat 
              for travellers seeking comfort and tranquillity amidst Sikkim's magnificent landscapes.
            </p>
            <p className="text-forest-600 font-body leading-relaxed">
              Conveniently located near popular tourist attractions such as Ban Jhakri Falls Park, 
              Tashi View Point, Gonjang Monastery and Luing Garden, and only a 7-minute drive 
              towards STNM Hospital — we ensure both accessibility and relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest-700 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={r2} className="reveal">
            <SectionTitle tag="Our Philosophy" title="What Sets Us Apart" light />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-3d bg-forest-800/60 border border-cream/10 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3
                  className="text-xl font-display font-semibold text-gold-400 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-cream/60 font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div ref={r3} className="reveal">
          <SectionTitle tag="Leadership" title="Meet Our Team" sub="The warm hearts behind your perfect stay." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Vidhya Gurung', role: 'Proprietor', phone: '9609851302', quote: 'We strive to make every guest feel at home in the lap of the Himalayas.' },
            { name: 'Indrajit Barman', role: 'Manager', phone: '6295498407', quote: 'Our team is dedicated to ensuring your comfort from check-in to check-out.' },
          ].map(({ name, role, phone, quote }) => (
            <div key={name} className="card-3d bg-cream rounded-3xl shadow-lg p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-body mb-1">{role}</p>
              <h3
                className="text-2xl font-display font-semibold text-forest-800 mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {name}
              </h3>
              <p className="text-sm text-forest-500 font-body italic mb-4">"{quote}"</p>
              <a
                href={`tel:${phone}`}
                className="text-sm font-body font-semibold text-forest-700 hover:text-gold-600 transition-colors"
              >
                📞 {phone}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
