// Navbar component

export function renderNavbar(): string {
  return `
    <nav class="navbar">
      <div class="container navbar-inner">
        <a href="#/home" class="navbar-brand" aria-label="IMAGE CITY home">
          <svg viewBox="0 0 440 75" height="40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ng1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#6366f1"/>
              </linearGradient>
              <linearGradient id="ng2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#3b82f6"/>
              </linearGradient>
              <linearGradient id="ng3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#06b6d4"/>
              </linearGradient>
              <linearGradient id="ng4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f472b6"/><stop offset="100%" stop-color="#a78bfa"/>
              </linearGradient>
              <linearGradient id="nwg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#a78bfa"/><stop offset="40%" stop-color="#6366f1"/>
                <stop offset="70%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#38bdf8"/>
              </linearGradient>
            </defs>
            <g transform="translate(40, 45)">
              <rect x="3" y="-28" width="14" height="24" rx="4" fill="url(#ng1)" opacity="0.95" transform="rotate(12)"/>
              <rect x="3" y="4" width="14" height="24" rx="4" fill="url(#ng2)" opacity="0.9" transform="rotate(-12)"/>
              <rect x="-17" y="-28" width="14" height="24" rx="4" fill="url(#ng3)" opacity="0.9" transform="rotate(-12)"/>
              <rect x="-17" y="4" width="14" height="24" rx="4" fill="url(#ng4)" opacity="0.85" transform="rotate(12)"/>
              <circle cx="0" cy="0" r="4" fill="white" opacity="0.95"/>
            </g>
            <text x="98" y="62" font-family="'Sora', 'Helvetica Neue', sans-serif" font-size="48" font-weight="800" letter-spacing="-2">
              <tspan fill="#f0f0f8">image</tspan><tspan fill="url(#nwg)" dx="2">city</tspan>
            </text>
          </svg>
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
    navbarToggle.classList.toggle('open')
  })

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbarNav?.classList.remove('open')
      navbarToggle?.classList.remove('open')
    })
  })
}
