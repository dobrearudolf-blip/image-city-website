// Navbar component

export function renderNavbar(): string {
  return `
    <nav class="navbar">
      <div class="container navbar-inner">
        <a href="#/home" class="navbar-brand">
          <img src="/logo/image-city-logo.svg" alt="IMAGE CITY" class="navbar-logo" />
          <span class="navbar-brand-text">IMAGE CITY</span>
        </a>
        <div class="navbar-nav" id="navbarNav">
          <a href="#/home" class="nav-link">Home</a>
          <a href="#/services" class="nav-link">Services</a>
          <a href="#/quote" class="nav-link">Request a Quote</a>
          <a href="#/contact" class="nav-link">Contact</a>
        </div>
        <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `
}

export function setupNavbar(): void {
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
}
