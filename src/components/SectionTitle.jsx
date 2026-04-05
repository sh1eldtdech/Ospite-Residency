export default function SectionTitle({ tag, title, sub, light = false }) {
  return (
    <div className={`text-center mb-14 ${light ? 'text-cream' : 'text-forest-800'}`}>
      {tag && (
        <p className={`text-xs uppercase tracking-[0.35em] font-body font-semibold mb-3 ${light ? 'text-gold-400' : 'text-gold-600'}`}>
          {tag}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-display font-semibold mb-4"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h2>
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className={`h-px w-16 ${light ? 'bg-cream/30' : 'bg-forest-200'}`} />
        <span className="text-gold-500 text-xl">✦</span>
        <span className={`h-px w-16 ${light ? 'bg-cream/30' : 'bg-forest-200'}`} />
      </div>
      {sub && (
        <p className={`text-base md:text-lg font-body max-w-2xl mx-auto leading-relaxed ${light ? 'text-cream/70' : 'text-forest-600'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
