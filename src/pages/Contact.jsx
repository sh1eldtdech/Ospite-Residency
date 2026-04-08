import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import useReveal from '../components/useReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', checkin: '', checkout: '', room: '', plan: 'CP', guests: '1', message: '' })
  const [sent, setSent] = useState(false)
  const r1 = useReveal()

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', checkin: '', checkout: '', room: '', plan: 'CP', guests: '1', message: '' })
  }

  const inputCls = 'w-full bg-cream border border-forest-200 rounded-xl px-4 py-3 text-sm font-body text-forest-800 placeholder-forest-300 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-400 transition-colors'
  const labelCls = 'block text-xs uppercase tracking-wider font-body font-semibold text-forest-500 mb-1.5'

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[55vh] flex items-end pb-16 px-6"
        style={{
          backgroundImage: "url('/hotel/docx_02.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-gold-400 text-xs uppercase tracking-[0.35em] font-body mb-2">Get in Touch</p>
          <h1
            className="text-5xl md:text-7xl font-display font-semibold text-cream"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Contact &amp; <span className="italic text-gold-400">Booking</span>
          </h1>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div ref={r1} className="reveal grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <SectionTitle tag="Reach Us" title="We'd Love to Host You" />
            </div>

            {/* Quick contacts */}
            {[
              { label: 'Address', icon: '📍', val: 'Suhim Colony, Helipad Road\nSichey, Gangtok – 737101\nSikkim, India' },
              { label: 'Proprietor', icon: '👩‍💼', val: 'Vidhya Gurung\n+91 9609851302' },
              { label: 'Manager', icon: '👨‍💼', val: 'Indrajit Barman\n+91 6295498407' },
              { label: 'Email', icon: '✉️', val: 'ospiter1234@gmail.com' },
              { label: 'Website', icon: '🌐', val: 'www.ospiteresidency.com' },
            ].map(({ label, icon, val }) => (
              <div key={label} className="flex gap-4 items-start p-5 bg-parchment rounded-2xl border border-gold-300/30">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-forest-400 font-body mb-1">{label}</p>
                  <p className="text-sm font-body text-forest-700 whitespace-pre-line">{val}</p>
                </div>
              </div>
            ))}

            {/* CTA phone */}
            <div className="bg-forest-700 rounded-2xl p-6 text-center">
              <p className="text-cream/60 text-xs uppercase tracking-wider font-body mb-2">Quick Booking Call</p>
              <a
                href="tel:9609851302"
                className="text-3xl font-display font-semibold text-gold-400"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                +91 9609851302
              </a>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3 bg-cream rounded-3xl p-8 md:p-10 shadow-xl">
            <h3
              className="text-3xl font-display font-semibold text-forest-800 mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Reserve Your Stay
            </h3>
            <p className="text-sm text-forest-400 font-body mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

            {sent ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-2xl font-display font-semibold text-forest-800 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Booking Request Sent!
                </h4>
                <p className="text-forest-500 font-body text-sm">
                  Thank you! We'll confirm your reservation shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 btn-gold px-6 py-2.5 rounded-xl text-forest-900 font-body font-semibold text-sm"
                >
                  Make Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone *</label>
                    <input name="phone" value={form.phone} onChange={handle} required placeholder="+91 XXXXX XXXXX" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" className={inputCls} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Check-in Date *</label>
                    <input name="checkin" type="date" value={form.checkin} onChange={handle} required className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Check-out Date *</label>
                    <input name="checkout" type="date" value={form.checkout} onChange={handle} required className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className={labelCls}>Room Type</label>
                    <select name="room" value={form.room} onChange={handle} className={inputCls}>
                      <option value="">Any</option>
                      <option>Super Deluxe</option>
                      <option>Deluxe</option>
                      <option>Standard</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Meal Plan</label>
                    <select name="plan" value={form.plan} onChange={handle} className={inputCls}>
                      <option value="EP">EP – Room Only</option>
                      <option value="CP">CP – + Breakfast</option>
                      <option value="MAP">MAP – + Dinner</option>
                      <option value="AP">AP – All Meals</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Guests</label>
                    <select name="guests" value={form.guests} onChange={handle} className={inputCls}>
                      {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Special Requests</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={3}
                    placeholder="Any special requirements or questions..."
                    className={inputCls + ' resize-none'}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl text-forest-900 font-body font-semibold text-base tracking-wide"
                >
                  Send Booking Request ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle tag="FAQs" title="Common Questions" />
          {[
            { q: 'What is the check-in and check-out time?', a: 'Standard check-in is 12:00 PM and check-out is 11:00 AM. Early/late options available on request.' },
            { q: 'Do you offer airport or station transfers?', a: 'Yes! We provide pick-up and drop services. Please inform us of your arrival details in advance.' },
            { q: 'Is breakfast included?', a: 'Complimentary buffet breakfast is included. Lunch and dinner are available under MAP/AP plans.' },
            { q: 'Is there Wi-Fi throughout the hotel?', a: 'Yes — free high-speed Wi-Fi is available on all floors and in all rooms.' },
            { q: 'Are pets allowed?', a: 'Currently we do not accommodate pets. Please contact us for special arrangements.' },
          ].map(({ q, a }) => (
            <details key={q} className="bg-cream rounded-xl mb-3 overflow-hidden group shadow-sm">
              <summary className="px-6 py-4 font-body font-semibold text-forest-800 text-sm cursor-pointer flex justify-between items-center list-none">
                {q}
                <span className="text-gold-500 transition-transform group-open:rotate-45 text-lg">+</span>
              </summary>
              <div className="px-6 pb-4 text-sm text-forest-500 font-body leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
