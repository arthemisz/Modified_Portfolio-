function Navbar({ profile, links }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__dot" aria-hidden="true"></span>
          <span className="navbar__brand-text">{profile.initials}</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  <span className="navbar__link-path">~/</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={profile.resumeUrl} className="navbar__cta">
          resume.pdf
        </a>
      </div>
    </header>
  )
}

export default Navbar
