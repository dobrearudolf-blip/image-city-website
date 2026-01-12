// Contact Page

import { icons } from '../components/Icons'
import { renderFooter } from '../components/Footer'

export function render(): string {
  return `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="section-title">Get in Touch</h1>
        <p class="section-subtitle">Have questions? We'd love to hear from you. Reach out through any of these channels.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">${icons.mail}</div>
            <h3 class="contact-title">Email Us</h3>
            <p class="contact-info">
              <a href="mailto:contact@imagecity.ro">contact@imagecity.ro</a>
            </p>
            <p class="contact-note">We respond within 24 hours</p>
          </div>

          <div class="contact-card">
            <div class="contact-icon">${icons.phone}</div>
            <h3 class="contact-title">Call Us</h3>
            <p class="contact-info">
              <a href="tel:+40738380888">+40 738 380 888</a>
            </p>
            <p class="contact-note">Monday–Sunday, 10:00–18:00</p>
          </div>

          <div class="contact-card">
            <div class="contact-icon">${icons.mapPin}</div>
            <h3 class="contact-title">Visit Us</h3>
            <p class="contact-info">Iasi, Romania</p>
            <p class="contact-note">By appointment only</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-details-grid">
          <div class="contact-details-card">
            <h3>Quick Response Guaranteed</h3>
            <p>Our team is dedicated to providing fast, helpful responses to all inquiries. Whether you need a quick quote or have detailed questions about our services, we're here to help.</p>
            <ul class="contact-features-list">
              <li><span class="check">✓</span> Free consultations</li>
              <li><span class="check">✓</span> Same-day response</li>
              <li><span class="check">✓</span> Flexible scheduling</li>
              <li><span class="check">✓</span> On-site support available</li>
            </ul>
          </div>

          <div class="contact-details-card">
            <h3>Ready to Get Started?</h3>
            <p>Request a personalized quote for your upcoming event. Our team will work with you to find the perfect solution for your needs.</p>
            <a href="#/quote" class="btn btn-primary">Request a Quote</a>
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `
}

export function afterRender(): void {
  // No specific event listeners needed for contact page
}
