import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <img
            src="/hotel/logo.png"
            alt="Hotel Ospite Residency logo"
            className="h-16 w-auto object-contain mb-4 scale-110 origin-left"
          />
          <h3
            className="text-3xl font-display font-semibold text-gold-400 mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Hotel Ospite Residency
          </h3>
          <p className="text-xs tracking-[0.3em] uppercase text-cream/40 mb-4">
            A Home Away From Home
          </p>
          <p className="text-sm leading-relaxed text-cream/60">
            Nestled in Suhim Colony, Sichey, Gangtok — where Himalayan serenity
            meets warm hospitality.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold-500 font-body font-semibold mb-5">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/rooms", "Our Rooms"],
              ["/travel", "Travel Guide"],
              ["/contact", "Contact & Booking"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-cream/60 hover:text-gold-400 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold-500 font-body font-semibold mb-5">
            Contact Us
          </h4>
          <div className="space-y-3 text-sm text-cream/60">
            <p>
              Suhim Colony, Helipad Road
              <br />
              Sichey, Gangtok – 737101, Sikkim
            </p>
            <p>
              <span className="text-cream/40 text-xs uppercase tracking-wider">
                Proprietor
              </span>
              <br />
              Vidhya Gurung —{" "}
              <a
                href="tel:9609851302"
                className="hover:text-gold-400 transition-colors"
              >
                9609851302
              </a>
            </p>
            <p>
              <span className="text-cream/40 text-xs uppercase tracking-wider">
                Manager
              </span>
              <br />
              Indrajit Barman —{" "}
              <a
                href="tel:6295498407"
                className="hover:text-gold-400 transition-colors"
              >
                6295498407
              </a>
            </p>
            <p>
              <a
                href="mailto:ospiter1234@gmail.com"
                className="hover:text-gold-400 transition-colors"
              >
                ospiter1234@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-cream/30">
        <p>
          © {new Date().getFullYear()} Hotel Ospite Residency. All rights
          reserved.
        </p>
        <div className="space-y-1 text-right">
          <p>
            Designed and developed by{" "}
            <a
              href="https://sh1eldtech.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gold-400 hover:text-emerald-400 transition-colors duration-200"
            >
              SH1ELD Tech
            </a>
          </p>
          <p>
            Powered by <span className="text-gold-400">SH1ELD Tech</span>. Made
            with 💚 in Gangtok
          </p>
        </div>
      </div>
    </footer>
  );
}
