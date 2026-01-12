// Quote Page

import { icons } from '../components/Icons'
import { renderFooter } from '../components/Footer'

export function render(): string {
  return `
    <!-- Quote Section -->
    <section class="quote-section">
      <div class="quote-watermark">Request a Quote</div>
      <div class="container">
        <div class="quote-header">
          <h1 class="section-title">Request a Quote</h1>
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

    ${renderFooter()}
  `
}

export function afterRender(): void {
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
}
