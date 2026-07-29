function Footer({ footer }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="section__inner footer__inner">
        <p>
          © {year} {footer.name}. All rights reserved.
        </p>
        <p className="footer__built">{footer.builtWith}</p>
      </div>
    </footer>
  )
}

export default Footer
