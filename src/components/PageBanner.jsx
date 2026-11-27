export default function PageBanner({ label, title, description }) {
  return (
    <section id="hero" className="page-banner">
      <div className="wrap">
        {label && <p className="eyebrow">{label}</p>}
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
    </section>
  )
}
