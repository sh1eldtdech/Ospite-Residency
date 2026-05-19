import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { districtsData } from '../data/districtsData'
import { getDistrictIdFromSlug } from '../data/districtRoutes'
import { districtExtras } from '../data/districtExtras'

const sectionAnchors = [
  { id: 'snapshot', label: 'Snapshot' },
  { id: 'attractions', label: 'Attractions' },
  { id: 'festivals', label: 'Festivals' },
  { id: 'logistics', label: 'Stay & Move' },
  { id: 'tips', label: 'Tips' },
  { id: 'faq', label: 'FAQ' },
]

export default function DistrictPage() {
  const { districtSlug } = useParams()
  const districtId = getDistrictIdFromSlug(districtSlug ?? '')
  const district = districtId ? districtsData[districtId] : null
  const extras = districtId ? districtExtras[districtId] : null

  const [activeTag, setActiveTag] = useState('All')
  const [openFaq, setOpenFaq] = useState(0)

  if (!district || !extras) {
    return (
      <section className="pt-44 pb-24 px-6 text-center">
        <h1 className="text-4xl font-display font-semibold text-forest-800 mb-4">
          District Not Found
        </h1>
        <p className="text-forest-500 font-body mb-8">
          The district page you requested does not exist.
        </p>
        <Link
          to="/travel"
          className="btn-gold inline-flex px-6 py-3 rounded-full text-forest-900 font-body font-semibold"
        >
          Back to Travel
        </Link>
      </section>
    )
  }

  const heroImage = district.topAttractions?.[0]?.img
  const topInfo = district.info?.slice(0, 3) ?? []

  const tagFilters = useMemo(() => {
    const tags = [...new Set((district.topAttractions ?? []).map((place) => place.tag))]
    return ['All', ...tags]
  }, [district.topAttractions])

  const visibleAttractions = useMemo(() => {
    if (activeTag === 'All') return district.topAttractions
    return district.topAttractions.filter((place) => place.tag === activeTag)
  }, [activeTag, district.topAttractions])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-36 -left-16 h-80 w-80 rounded-full bg-gold-300/25 blur-3xl" />
      <div className="pointer-events-none absolute top-[42rem] -right-20 h-72 w-72 rounded-full bg-forest-300/20 blur-3xl" />

      <section
        className="relative min-h-[78vh] flex items-end px-6 pt-40 pb-20"
        style={{
          backgroundImage: heroImage ? `url('${heroImage}')` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/65 to-forest-900/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,208,122,0.3),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-gold-300 text-xs uppercase tracking-[0.35em] font-body mb-4">
            District Explorer
          </p>
          <h1
            className="text-5xl md:text-7xl font-display font-semibold text-cream max-w-3xl leading-[0.95]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {district.name}
          </h1>
          <p className="text-cream/90 font-body max-w-2xl mt-5 text-base md:text-lg">
            {district.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#attractions"
              className="btn-gold inline-flex px-6 py-3 rounded-full text-forest-900 font-body font-semibold text-sm"
            >
              Explore Attractions
            </a>
            <a
              href="#faq"
              className="inline-flex px-6 py-3 rounded-full border border-cream/35 text-cream font-body font-semibold text-sm hover:bg-cream/10 transition-colors"
            >
              Read FAQs
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-10">
            {topInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl px-5 py-4 border border-white/20 bg-forest-900/30 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1 hover:bg-forest-900/40"
              >
                <div className="text-4xl drop-shadow-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-white/70 text-[0.65rem] md:text-xs uppercase tracking-[0.15em] font-body font-semibold mb-1">
                    {item.title}
                  </p>
                  <p 
                    className="text-white text-lg md:text-xl font-display font-semibold leading-tight drop-shadow-sm"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 py-6 bg-cream/70 backdrop-blur-md sticky top-[72px] z-30 border-y border-gold-300/30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {sectionAnchors.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-4 py-2 bg-white/90 hover:bg-white text-forest-700 text-sm font-body font-medium border border-gold-300/40 transition-all hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <section id="snapshot" className="pt-20 pb-8 px-6 max-w-7xl mx-auto scroll-mt-44">
        <SectionTitle
          tag="District Snapshot"
          title={`${district.name} at a Glance`}
          sub="Essential information for smoother trip planning."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {district.info.map((item) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 p-6 md:p-7 rounded-[1.25rem] shadow-sm border border-black/5 hover:-translate-y-1 transition-transform ${item.color}`}
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/5 flex items-center justify-center text-2xl md:text-3xl drop-shadow-sm">
                {item.icon}
              </div>
              <div className="flex flex-col pt-1">
                <p className="text-sm font-body font-medium opacity-80 mb-1">
                  {item.title}
                </p>
                <p className="text-xl md:text-2xl font-display font-bold leading-tight">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="attractions" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-44">
        <SectionTitle
          tag="Top Attractions"
          title={`Explore ${district.name}`}
          sub="Use filters to quickly discover places by travel style."
        />

        <div className="flex flex-wrap gap-2 mt-8">
          {tagFilters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-4 py-2 text-sm font-body border transition-all ${
                activeTag === tag
                  ? 'bg-forest-700 text-cream border-forest-700'
                  : 'bg-white text-forest-700 border-gold-300/50 hover:bg-gold-300/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {visibleAttractions.map((place) => (
            <article
              key={place.title}
              className="modern-panel group rounded-3xl overflow-hidden border border-gold-300/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-gold-500 text-forest-900 text-xs font-body font-bold px-3 py-1 rounded-full">
                  {place.tag}
                </span>
              </div>
              <div className="p-6">
                <h3
                  className="text-2xl font-display font-semibold text-forest-800 mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {place.title}
                </h3>
                <p className="text-sm text-forest-500 font-body leading-relaxed">{place.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="festivals" className="relative py-24 mt-10 scroll-mt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12]"
          style={{ backgroundImage: `url('${district.topAttractions?.[0]?.img || district.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <SectionTitle
            tag="Festivals & Events"
            title={`Celebrate ${district.name}`}
            sub="Seasonal experiences and local cultural moments."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {extras.festivals.map((festival) => (
              <article
                key={festival.name}
                className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl border border-gray-100/80 hover:border-gold-300/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                  <svg className="w-32 h-32 text-gold-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.89 4 3 4.9 3 6v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                </div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-body font-bold text-emerald-700">
                    {festival.season}
                  </p>
                </div>
                <h3 className="text-3xl font-display font-semibold text-forest-900 mb-4 relative z-10">{festival.name}</h3>
                <p className="text-forest-600 font-body leading-relaxed relative z-10">{festival.note}</p>
                
                <div className="absolute bottom-0 left-0 h-1.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="logistics" className="relative py-24 bg-forest-50/50 scroll-mt-32 border-y border-forest-100">
        <div className="px-6 max-w-7xl mx-auto">
          <SectionTitle
            tag="Stay & Move"
            title="Accommodation and Transportation"
            sub="Practical options for where to stay and how to get around."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            
            <article className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-forest-100/50 hover:shadow-2xl hover:border-gold-300/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
              <div className="absolute -top-6 -right-6 text-forest-50 opacity-60 pointer-events-none">
                <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" /></svg>
              </div>
              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 mb-8 shadow-sm border border-gold-100/50">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-display font-semibold text-forest-900 mb-8">
                  Accommodation
                </h3>
                <ul className="space-y-6">
                  {extras.accommodations.map((item, index) => (
                    <li key={item} className="flex items-start gap-5 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 font-bold text-sm group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all duration-300 shadow-sm mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-base text-forest-600 font-body leading-relaxed group-hover:text-forest-800 transition-colors pt-1">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-forest-100/50 hover:shadow-xl hover:border-sky-300/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
              <div className="absolute -bottom-10 -right-10 text-sky-50 opacity-60 pointer-events-none z-0">
                <svg className="w-56 h-56" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
              </div>
              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 mb-8 shadow-sm border border-sky-100/50">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v8l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-display font-semibold text-forest-900 mb-8">
                  Transportation
                </h3>
                <ul className="space-y-6">
                  {extras.transportation.map((item, index) => (
                    <li key={item} className="flex items-start gap-5 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 font-bold text-sm group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-300 shadow-sm mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-base text-forest-600 font-body leading-relaxed group-hover:text-forest-800 transition-colors pt-1">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="tips" className="relative py-24 scroll-mt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url('${district.topAttractions?.[2]?.img || district.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none" />
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <SectionTitle
            tag="Travel Tips"
            title={`Smart Tips for ${district.name}`}
            sub="Easy wins to make your plan smoother and more comfortable."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {extras.travelTips.map((tip, index) => (
              <article
                key={tip}
                className="group relative bg-white rounded-3xl p-8 border border-gold-300/30 hover:border-gold-400 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center shadow-lg text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-gold-600 font-body font-bold mb-3">
                    Tip 0{index + 1}
                  </p>
                  <p className="text-base text-forest-700 font-body leading-relaxed group-hover:text-forest-900 transition-colors duration-300">
                    {tip}
                  </p>
                </div>
                <div className="mt-8 h-1 w-12 rounded-full bg-gold-200 group-hover:w-full group-hover:bg-gold-500 transition-all duration-500 ease-in-out" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="pb-24 px-6 max-w-7xl mx-auto scroll-mt-44 relative">
        <SectionTitle
          tag="FAQ"
          title={`${district.name} - Frequently Asked Questions`}
          sub="Tap a question to reveal the answer."
        />
        <div className="mt-8 max-w-3xl mx-auto">
          {extras.faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <article
                key={faq.q}
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                className={`rounded-2xl border px-6 py-5 transition-all duration-300 mb-4 cursor-pointer overflow-hidden ${
                  isOpen
                    ? 'bg-white border-gold-400 shadow-lg scale-[1.02] z-10 relative'
                    : 'bg-white/60 border-gold-300/30 hover:border-gold-400/60 hover:bg-white backdrop-blur-sm shadow-sm hover:shadow-md'
                }`}
              >
                <div
                  className="w-full text-left flex items-center justify-between gap-4 outline-none"
                >
                  <h3 className={`text-lg md:text-xl font-display font-semibold transition-colors duration-300 ${isOpen ? 'text-forest-900' : 'text-forest-800'}`}>
                    {faq.q}
                  </h3>
                  <span className={`flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-gold-500 text-forest-900' : 'bg-gold-100 text-gold-700 hover:bg-gold-200'}`}>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-forest-600 font-body leading-relaxed pt-4 border-t border-gold-300/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
