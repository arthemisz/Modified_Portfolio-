function Contact({ contact }) {
  return (
    <section id="contact" className="contact">
      <div className="section__inner">
        <p className="section__eyebrow">{contact.heading}</p>
        <h2 className="section__heading">Let's talk</h2>
        <p className="contact__blurb">{contact.blurb}</p>

        <a href={`mailto:${contact.email}`} className="contact__email">
          {contact.email}
        </a>

        <ul className="contact__socials">
          {contact.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer">
                <span className="contact__social-label">{social.label}</span>
                <span className="contact__social-handle">{social.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
