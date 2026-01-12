// Lightweight hash-based router

export interface Route {
  path: string
  title: string
  render: () => string
  afterRender?: () => void
}

export class Router {
  private routes: Map<string, Route> = new Map()
  private container: HTMLElement | null = null

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)
    window.addEventListener('hashchange', () => this.navigate())
  }

  addRoute(route: Route): Router {
    this.routes.set(route.path, route)
    return this
  }

  start(): void {
    // Redirect to #/home if hash is empty
    if (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/') {
      window.location.hash = '#/home'
      return
    }
    this.navigate()
  }

  private navigate(): void {
    const hash = window.location.hash.slice(1) || '/home'
    const route = this.routes.get(hash)

    if (route && this.container) {
      // Update document title
      document.title = `IMAGE CITY — ${route.title}`

      // Render page content
      this.container.innerHTML = route.render()

      // Update active nav state
      this.updateActiveNav(hash)

      // Call afterRender for event listeners
      if (route.afterRender) {
        route.afterRender()
      }

      // Scroll to top
      window.scrollTo(0, 0)
    } else {
      // Redirect to home if route not found
      window.location.hash = '#/home'
    }
  }

  private updateActiveNav(currentPath: string): void {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${currentPath}`) {
        link.classList.add('active')
      }
    })
  }
}

export function createRouter(containerId: string): Router {
  return new Router(containerId)
}
