// Home Page

import { icons } from '../components/Icons'
import { renderCtaBand } from '../components/CtaBand'
import { renderFooter } from '../components/Footer'

export function render(): string {
  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Premium event displays that captivate your audience</h1>
        <p class="hero-description">
          Transform your events with stunning LED screens, professional press walls, and interactive digital signage. We deliver the technology, you deliver the experience.
        </p>
        <div class="hero-buttons">
          <a href="#/quote" class="btn btn-primary">Request a Quote</a>
          <a href="#/contact" class="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="intro-section">
      <div class="container">
        <h2 class="section-title">Everything you need for stunning event displays</h2>
        <p class="section-subtitle">From corporate conferences to outdoor festivals, we provide premium visual solutions tailored to your specific needs.</p>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">Professional equipment rentals backed by expert support</p>

        <div class="services-grid">
          <!-- LED Screen Preview -->
          <div class="service-card">
            <div class="service-icon">${icons.monitor}</div>
            <h3 class="service-title">LED Screen Rentals</h3>
            <div class="service-features">
              <div class="service-feature">
                <span class="check">✓</span>
                <span>4K and HD resolution options</span>
              </div>
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Indoor & outdoor models</span>
              </div>
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Full technical support</span>
              </div>
            </div>
          </div>

          <!-- Press Wall Preview -->
          <div class="service-card">
            <div class="service-icon">${icons.image}</div>
            <h3 class="service-title">Press Wall / Step & Repeat</h3>
            <div class="service-features">
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Custom branding & graphics</span>
              </div>
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Modular sizes available</span>
              </div>
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Professional installation</span>
              </div>
            </div>
          </div>

          <!-- Multimedia Totem Preview -->
          <div class="service-card">
            <div class="service-icon">${icons.smartphone}</div>
            <h3 class="service-title">Multimedia Totem</h3>
            <div class="service-features">
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Floor-standing digital kiosk</span>
              </div>
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Portrait & landscape modes</span>
              </div>
              <div class="service-feature">
                <span class="check">✓</span>
                <span>Optional touchscreen</span>
              </div>
            </div>
          </div>
        </div>

        <div class="services-cta">
          <a href="#/services" class="btn btn-secondary">View All Services</a>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <p class="section-subtitle">Getting started is simple — just three easy steps</p>

        <div class="process-grid">
          <div class="process-step">
            <div class="process-number">1</div>
            <h3 class="process-title">Request a Quote</h3>
            <p class="process-description">Tell us about your event, venue, and equipment needs. We'll respond within 24 hours.</p>
          </div>
          <div class="process-step">
            <div class="process-number">2</div>
            <h3 class="process-title">Receive Your Proposal</h3>
            <p class="process-description">Get a detailed proposal with pricing, availability, and technical specifications.</p>
          </div>
          <div class="process-step">
            <div class="process-number">3</div>
            <h3 class="process-title">Sit Back and Relax</h3>
            <p class="process-description">We handle delivery, setup, and technical support. You focus on your event.</p>
          </div>
        </div>
      </div>
    </section>

    ${renderCtaBand()}
    ${renderFooter()}
  `
}

export function afterRender(): void {
  // No specific event listeners needed for home page
}
