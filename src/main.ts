import './style.css'

// ===== Icons =====
const icons = {
  monitor: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  image: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
  smartphone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
  mail: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  phone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  mapPin: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  plus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
}

// ===== Page Content =====
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navbar -->
  <nav class="navbar">
    <div class="container navbar-inner">
      <a href="#home" class="navbar-brand">
        <img src="/logo/image-city-logo.svg" alt="IMAGE CITY" class="navbar-logo" />
        <span class="navbar-brand-text">IMAGE CITY</span>
      </a>
      <div class="navbar-nav" id="navbarNav">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#quote" class="nav-link">Request a Quote</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Premium event displays that captivate your audience</h1>
      <p class="hero-description">
        Transform your events with stunning LED screens, professional press walls, and interactive digital signage. We deliver the technology, you deliver the experience.
      </p>
      <div class="hero-buttons">
        <a href="#quote" class="btn btn-primary">Request a Quote</a>
        <a href="#contact" class="btn btn-secondary">Contact Us</a>
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

  <!-- Services Section -->
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">Professional equipment rentals backed by expert support</p>

      <div class="services-grid">
        <!-- LED Screen Card -->
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
              <span>Indoor & outdoor models available</span>
            </div>
            <div class="service-feature">
              <span class="check">✓</span>
              <span>43" to 98" display sizes</span>
            </div>
            <div class="service-feature">
              <span class="check">✓</span>
              <span>Built-in audio support</span>
            </div>
          </div>
          <div class="service-specs">
            <p class="service-specs-title">Technical Specs</p>
            <p class="service-specs-text">P2.5 Indoor • 3840Hz refresh • 640×640 cabinets • GOB protection</p>
          </div>
        </div>

        <!-- Press Wall Card -->
        <div class="service-card">
          <div class="service-icon">${icons.image}</div>
          <h3 class="service-title">Press Wall / Step & Repeat Backdrop</h3>
          <div class="service-features">
            <div class="service-feature">
              <span class="check">✓</span>
              <span>Custom branding & graphics</span>
            </div>
            <div class="service-feature">
              <span class="check">✓</span>
              <span>Modular sizes for any venue</span>
            </div>
            <div class="service-feature">
              <span class="check">✓</span>
              <span>Premium fabric with clean finish</span>
            </div>
            <div class="service-feature">
              <span class="check">✓</span>
              <span>Optional professional setup</span>
            </div>
          </div>
        </div>

        <!-- Multimedia Totem Card -->
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
              <span>Portrait & landscape orientation</span>
            </div>
            <div class="service-feature">
              <span class="check">✓</span>
              <span>USB / Android content playback</span>
            </div>
            <div class="service-feature">
              <span class="check">✓</span>
              <span>Optional touchscreen capability</span>
            </div>
          </div>
        </div>
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

  <!-- FAQ Section -->
  <section class="faq-section">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-subtitle">Quick answers to common questions about our services</p>

      <div class="faq-container">
        <div class="faq-item">
          <button class="faq-question">
            <span>What areas do you serve?</span>
            <span class="faq-icon">${icons.plus}</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              We primarily serve Iasi and the surrounding region in Romania. For larger events, we can accommodate requests throughout Moldova and neighboring areas. Contact us to discuss your specific location.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>How far in advance should I book?</span>
            <span class="faq-icon">${icons.plus}</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              We recommend booking at least 2 weeks in advance to ensure availability, especially during peak event season. For large-scale events or multiple equipment rentals, 3-4 weeks notice is preferred.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Do you provide technical support on-site?</span>
            <span class="faq-icon">${icons.plus}</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Yes! We offer professional setup and on-site technical support for all our rentals. Our technicians will ensure everything runs smoothly throughout your event. This service can be included in your rental package.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Can I customize the backdrop with my branding?</span>
            <span class="faq-icon">${icons.plus}</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Absolutely! Our press walls and step & repeat backdrops are fully customizable. You can provide your own design, or we can help create one that matches your brand guidelines. High-resolution printing ensures crisp, professional results.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>What's your cancellation policy?</span>
            <span class="faq-icon">${icons.plus}</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-content">
              Cancellations made 7+ days before the event receive a full refund. Cancellations within 3-7 days receive a 50% refund. Cancellations less than 3 days before the event are non-refundable. We understand plans change — contact us to discuss your situation.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Quote Section -->
  <section id="quote" class="quote-section">
    <div class="quote-watermark">Request a Quote</div>
    <div class="container">
      <div class="quote-header">
        <h2 class="section-title">Request a Quote</h2>
        <p class="section-subtitle">Tell us about your event and we'll provide a detailed proposal within 24 hours.</p>
      </div>

      <div class="quote-form-container">
        <form id="quoteForm" class="form-grid">
          <div class="form-group">
            <label class="form-label" for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" class="form-input" placeholder="Your full name" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" class="form-input" placeholder="Your company (optional)" />
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email Address</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="you@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" class="form-input" placeholder="+40 738 380 888" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="eventDate">Event Date</label>
            <input type="date" id="eventDate" name="eventDate" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="city">City</label>
            <input type="text" id="city" name="city" class="form-input" placeholder="Event city" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="venueType">Venue Type</label>
            <select id="venueType" name="venueType" class="form-select" required>
              <option value="">Select venue type</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="both">Indoor & Outdoor</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="serviceNeeded">Service Needed</label>
            <select id="serviceNeeded" name="serviceNeeded" class="form-select" required>
              <option value="">Select a service</option>
              <option value="led-screen">LED Screen Rental</option>
              <option value="press-wall">Press Wall / Step & Repeat Backdrop</option>
              <option value="multimedia-totem">Multimedia Totem</option>
              <option value="multiple">Multiple Services</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="estimatedSize">Estimated Size/Quantity</label>
            <input type="text" id="estimatedSize" name="estimatedSize" class="form-input" placeholder="e.g., 2x 55-inch screens" />
          </div>
          <div class="form-group">
            <label class="form-label" for="rentalDuration">Rental Duration</label>
            <select id="rentalDuration" name="rentalDuration" class="form-select">
              <option value="">Select duration</option>
              <option value="half-day">Half Day (4 hours)</option>
              <option value="full-day">Full Day (8 hours)</option>
              <option value="multi-day">Multi-Day</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
          <div class="form-group full-width">
            <label class="form-label" for="setupTime">Preferred Setup Time</label>
            <input type="text" id="setupTime" name="setupTime" class="form-input" placeholder="e.g., 2 hours before event" />
          </div>
          <div class="form-group full-width">
            <label class="form-label" for="additionalDetails">Additional Details</label>
            <textarea id="additionalDetails" name="additionalDetails" class="form-textarea" placeholder="Tell us more about your event, specific requirements, or any questions..."></textarea>
          </div>
          <div class="form-submit">
            <button type="submit" class="btn btn-primary">Submit Quote Request</button>
          </div>
        </form>

        <div id="formSuccess" class="form-success" style="display: none;">
          <div class="form-success-icon">${icons.check}</div>
          <h3>Thank You!</h3>
          <p>Your quote request has been submitted successfully. We'll get back to you within 24 hours.</p>
          <button type="button" id="submitAnother" class="btn btn-secondary">Submit Another Request</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-subtitle">Have questions? We'd love to hear from you. Reach out through any of these channels.</p>

      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">${icons.mail}</div>
          <h3 class="contact-title">Email Us</h3>
          <p class="contact-info">
            <a href="mailto:contact@imagecity.ro">contact@imagecity.ro</a>
          </p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">${icons.phone}</div>
          <h3 class="contact-title">Call Us</h3>
          <p class="contact-info">
            <a href="tel:+40738380888">+40 738 380 888</a><br />
            <small>Monday–Sunday, 10:00–18:00</small>
          </p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">${icons.mapPin}</div>
          <h3 class="contact-title">Visit Us</h3>
          <p class="contact-info">
            Iasi, Romania<br />
            <small>By appointment only</small>
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section class="cta-band">
    <div class="cta-inner">
      <h2 class="cta-title">Ready to elevate your event?</h2>
      <a href="#quote" class="btn">Request a Quote</a>
    </div>
  </section>

  <!-- Footer -->
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
            <a href="#home" class="footer-link">Home</a>
            <a href="#services" class="footer-link">Services</a>
            <a href="#quote" class="footer-link">Request a Quote</a>
            <a href="#contact" class="footer-link">Contact</a>
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
        <p>&copy; ${new Date().getFullYear()} IMAGE CITY. All rights reserved.</p>
        <p>Iasi, Romania</p>
      </div>
    </div>
  </footer>
`

// ===== Interactive Features =====

// Mobile navigation toggle
const navbarToggle = document.getElementById('navbarToggle')
const navbarNav = document.getElementById('navbarNav')

navbarToggle?.addEventListener('click', () => {
  navbarNav?.classList.toggle('open')
})

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbarNav?.classList.remove('open')
  })
})

// Active nav link based on scroll position
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')

function updateActiveNav() {
  const scrollY = window.scrollY + 100

  sections.forEach(section => {
    const sectionTop = (section as HTMLElement).offsetTop - 80
    const sectionHeight = (section as HTMLElement).offsetHeight
    const sectionId = section.getAttribute('id')

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active')
        }
      })
    }
  })
}

// Update on scroll and hash change
window.addEventListener('scroll', updateActiveNav)
window.addEventListener('hashchange', () => {
  const hash = window.location.hash || '#home'
  navLinks.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === hash) {
      link.classList.add('active')
    }
  })
})

// Initial check
updateActiveNav()

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question')
  question?.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('open')
      }
    })
    // Toggle current item
    item.classList.toggle('open')
  })
})

// Quote Form Handling
const quoteForm = document.getElementById('quoteForm') as HTMLFormElement
const formSuccess = document.getElementById('formSuccess')
const submitAnother = document.getElementById('submitAnother')

quoteForm?.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(quoteForm)
  const data = Object.fromEntries(formData.entries())
  console.log('Quote request submitted:', data)

  // Show success message
  quoteForm.style.display = 'none'
  if (formSuccess) {
    formSuccess.style.display = 'block'
  }
})

submitAnother?.addEventListener('click', () => {
  quoteForm.reset()
  quoteForm.style.display = 'grid'
  if (formSuccess) {
    formSuccess.style.display = 'none'
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = anchor.getAttribute('href')
    if (targetId) {
      const target = document.querySelector(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Update URL without jumping
        history.pushState(null, '', targetId)
      }
    }
  })
})
