// Footer component

export function renderFooter(): string {
  const year = new Date().getFullYear()

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <svg viewBox="0 0 440 100" width="200" height="45" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#6366f1"/>
                  </linearGradient>
                  <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#3b82f6"/>
                  </linearGradient>
                  <linearGradient id="fg3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#06b6d4"/>
                  </linearGradient>
                  <linearGradient id="fg4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f472b6"/><stop offset="100%" stop-color="#a78bfa"/>
                  </linearGradient>
                  <linearGradient id="fwg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#a78bfa"/><stop offset="40%" stop-color="#6366f1"/>
                    <stop offset="70%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#38bdf8"/>
                  </linearGradient>
                </defs>
                <g transform="translate(40, 45)">
                  <rect x="3" y="-28" width="14" height="24" rx="4" fill="url(#fg1)" opacity="0.95" transform="rotate(12)"/>
                  <rect x="3" y="4" width="14" height="24" rx="4" fill="url(#fg2)" opacity="0.9" transform="rotate(-12)"/>
                  <rect x="-17" y="-28" width="14" height="24" rx="4" fill="url(#fg3)" opacity="0.9" transform="rotate(-12)"/>
                  <rect x="-17" y="4" width="14" height="24" rx="4" fill="url(#fg4)" opacity="0.85" transform="rotate(12)"/>
                  <circle cx="0" cy="0" r="4" fill="white" opacity="0.95"/>
                </g>
                <text x="98" y="55" font-family="'Sora', 'Helvetica Neue', sans-serif" font-size="48" font-weight="800" letter-spacing="-2">
                  <tspan fill="#f0f0f8">image</tspan><tspan fill="url(#fwg)" dx="2">city</tspan>
                </text>
                <text x="100" y="82" font-family="'Sora', 'Helvetica Neue', sans-serif" font-size="8.5" font-weight="600" letter-spacing="5" fill="#2d3352">YOUR VISION. OUR SCREENS.</text>
              </svg>
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
