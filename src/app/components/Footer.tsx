function Footer() {
  return (
    <footer className="footer sec">
      <div className="footer-content sec-cont">
        <nav className="footer-nav">
          <div className="footer-row-1">
            <h2 className="footer-luleå-bio">LULEÅ BIO</h2>
            <li>
              <a
                className="footer-options"
                href="https://www.google.com/maps/place/Lule%C3%A5/@65.586662,22.1823806,12z/data=!3m1!4b1!4m5!3m4!1s0x467f6314d2e8b867:0x4034506de8c8620!8m2!3d65.584819!4d22.1567026"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lordgatan 123, Sverige
              </a>
            </li>
          </div>
          <div className="footer-row-2">
            <h2 className="footer-kontakta-oss">KONTAKTA OSS</h2>
            <li>
              <a className="footer-options" href="#">
                0920-454545
              </a>
            </li>
            <li>
              <a className="footer-options" href="#">
                info@webbsida.se
              </a>
            </li>
          </div>
          <div className="footer-row-3">
            <h2 className="footer-sociala-medier">SOCIALA MEDIER</h2>
            <a
              href="#"
              className="fa-brands fa-facebook fa-xl"
              id="footer-facebook-logo"
            ></a>
            <a
              href="#"
              className="fa-brands fa-instagram fa-xl"
              id="footer-instagram-logo"
            ></a>
            <a
              href="#"
              className="fa-brands fa-twitter fa-xl"
              id="footer-twitter-logo"
            ></a>
          </div>
          <div className="footer-row-4">
            <h2>ÖVRIGT</h2>
            <li>
              <a className="footer-options" href="#">
                Meny
              </a>
            </li>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
