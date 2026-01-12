// Footer component

export function renderFooter(): string {
  const year = new Date().getFullYear()

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/logo/image-city-logo.svg" alt="IMAGE CITY" />
              <span>IMAGE CITY</span>
            </div>
            <p class="footer-description">
              Premium visual solutions for events and businesses. We bring your vision to life with cutting-edge LED technology and professional branding solutions.
            </p>
          </div>

          <div class="footer-column">
            <h4 class="footer-title">Quick Links</h4>
            <nav class="footer-links">
              <a href="#/home" class="footer-link">Home</a>
              <a href="#/services" class="footer-link">Services</a>
              <a href="#/quote" class="footer-link">Request a Quote</a>
              <a href="#/contact" class="footer-link">Contact</a>
            </nav>
          </div>

          <div class="footer-column">
            <h4 class="footer-title">Get in Touch</h4>
            <div class="footer-contact-item">
              <span class="label">Email:</span>
              <a href="mailto:contact@imagecity.ro" class="footer-link">contact@imagecity.ro</a>
            </div>
            <div class="footer-contact-item">
              <span class="label">Phone:</span>
              <a href="tel:+40738380888" class="footer-link">+40 738 380 888</a>
            </div>
            <div class="footer-contact-item">
              <span class="label">Hours:</span>
              <span>Monday–Sunday, 10:00–18:00</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${year} IMAGE CITY. All rights reserved.</p>
          <p>Iasi, Romania</p>
        </div>
      </div>
    </footer>
  `
}
