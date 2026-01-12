import './style.css'
import { createRouter } from './router'
import { renderNavbar, setupNavbar } from './components/Navbar'
import * as HomePage from './pages/HomePage'
import * as ServicesPage from './pages/ServicesPage'
import * as QuotePage from './pages/QuotePage'
import * as ContactPage from './pages/ContactPage'

// Initialize app
function initApp(): void {
  const app = document.querySelector<HTMLDivElement>('#app')!

  // Set up app structure with navbar and main content area
  app.innerHTML = `
    ${renderNavbar()}
    <main id="page-content"></main>
  `

  // Setup navbar interactions
  setupNavbar()

  // Initialize router
  const router = createRouter('page-content')

  // Register routes
  router
    .addRoute({
      path: '/home',
      title: 'Home',
      render: HomePage.render,
      afterRender: HomePage.afterRender
    })
    .addRoute({
      path: '/services',
      title: 'Services',
      render: ServicesPage.render,
      afterRender: ServicesPage.afterRender
    })
    .addRoute({
      path: '/quote',
      title: 'Request a Quote',
      render: QuotePage.render,
      afterRender: QuotePage.afterRender
    })
    .addRoute({
      path: '/contact',
      title: 'Contact',
      render: ContactPage.render,
      afterRender: ContactPage.afterRender
    })

  // Start router
  router.start()
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
