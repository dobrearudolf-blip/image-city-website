// Services Page

import { icons } from '../components/Icons'
import { renderCtaBand } from '../components/CtaBand'
import { renderFooter } from '../components/Footer'

export function render(): string {
  return `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="section-title">Our Services</h1>
        <p class="section-subtitle">Professional equipment rentals backed by expert support for events of any scale.</p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
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

    <!-- LED Specs Accordion Section -->
    <section class="specs-section">
      <div class="container">
        <h2 class="section-title">LED Screen Technical Specifications</h2>
        <p class="section-subtitle">Detailed specifications for our LED display inventory</p>

        <div class="accordion-container">
          <div class="accordion-item" data-accordion="indoor">
            <button class="accordion-header">
              <span>Indoor LED Panels</span>
              <span class="accordion-icon">${icons.plus}</span>
            </button>
            <div class="accordion-content">
              <div class="specs-table">
                <div class="specs-row">
                  <span class="specs-label">Pixel Pitch</span>
                  <span class="specs-value">P2.5, P3, P4</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Resolution</span>
                  <span class="specs-value">Up to 4K supported</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Brightness</span>
                  <span class="specs-value">800-1200 nits</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Refresh Rate</span>
                  <span class="specs-value">3840Hz</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Cabinet Size</span>
                  <span class="specs-value">640×640mm</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Protection</span>
                  <span class="specs-value">GOB (Glue on Board)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item" data-accordion="outdoor">
            <button class="accordion-header">
              <span>Outdoor LED Panels</span>
              <span class="accordion-icon">${icons.plus}</span>
            </button>
            <div class="accordion-content">
              <div class="specs-table">
                <div class="specs-row">
                  <span class="specs-label">Pixel Pitch</span>
                  <span class="specs-value">P4, P5, P6, P8</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Resolution</span>
                  <span class="specs-value">Full HD and above</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Brightness</span>
                  <span class="specs-value">5000-7000 nits</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Refresh Rate</span>
                  <span class="specs-value">3840Hz</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">IP Rating</span>
                  <span class="specs-value">IP65 front / IP54 rear</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Operating Temp</span>
                  <span class="specs-value">-20°C to +50°C</span>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item" data-accordion="configs">
            <button class="accordion-header">
              <span>Available Configurations</span>
              <span class="accordion-icon">${icons.plus}</span>
            </button>
            <div class="accordion-content">
              <div class="specs-table">
                <div class="specs-row">
                  <span class="specs-label">Small Display</span>
                  <span class="specs-value">2m × 1m (presentations)</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Medium Display</span>
                  <span class="specs-value">4m × 2m (conferences)</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Large Display</span>
                  <span class="specs-value">6m × 3m (concerts)</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Custom Sizes</span>
                  <span class="specs-value">Available on request</span>
                </div>
                <div class="specs-row">
                  <span class="specs-label">Mounting</span>
                  <span class="specs-value">Ground, hanging, wall</span>
                </div>
              </div>
            </div>
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

    ${renderCtaBand()}
    ${renderFooter()}
  `
}

export function afterRender(): void {
  // Setup specs accordion
  const specItems = document.querySelectorAll('.accordion-item')
  specItems.forEach(item => {
    const header = item.querySelector('.accordion-header')
    header?.addEventListener('click', () => {
      specItems.forEach(other => {
        if (other !== item) other.classList.remove('open')
      })
      item.classList.toggle('open')
    })
  })

  // Setup FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item')
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    question?.addEventListener('click', () => {
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open')
      })
      item.classList.toggle('open')
    })
  })
}
