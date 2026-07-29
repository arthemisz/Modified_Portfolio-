function Hero({ profile }) {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">// {profile.location}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__window" aria-hidden="true">
          <div className="hero__window-bar">
            <span className="hero__window-dot hero__window-dot--red"></span>
            <span className="hero__window-dot hero__window-dot--yellow"></span>
            <span className="hero__window-dot hero__window-dot--green"></span>
            <span className="hero__window-tab">profile.js</span>
          </div>
          <pre className="hero__code">
            <code>
{`const dev = {
  name: "${profile.name}",
  role: "${profile.title}",
  stack: ["React", "Node", "SQL"],
  available: true,
}`}
              <span className="hero__cursor">▍</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero
