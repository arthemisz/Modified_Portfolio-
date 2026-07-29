function About({ about }) {
  return (
    <section id="about" className="about">
      <div className="section__inner">
        <p className="section__eyebrow">$ {about.heading}</p>

        <div className="about__grid">
          <div className="about__copy">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <dl className="about__facts">
            {about.facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
