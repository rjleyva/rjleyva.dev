class FaviconManager {
  private faviconLinkElement: HTMLLinkElement | null = null

  constructor() {
    this.setupFaviconManagement()
  }

  private setupFaviconManagement(): void {
    this.faviconLinkElement = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement | null

    if (!this.faviconLinkElement) {
      this.faviconLinkElement = document.createElement('link')
      this.faviconLinkElement.rel = 'icon'
      this.faviconLinkElement.type = 'image/svg+xml'
      document.head.appendChild(this.faviconLinkElement)
    }

    this.updateFaviconBasedOnSystemTheme()

    const systemThemeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )
    systemThemeMediaQuery.addEventListener('change', () =>
      this.updateFaviconBasedOnSystemTheme()
    )
  }

  private updateFaviconBasedOnSystemTheme(): void {
    if (!this.faviconLinkElement) return

    const systemPrefersDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    this.faviconLinkElement.href = systemPrefersDarkTheme
      ? '/favicons/favicon-dark.svg'
      : '/favicons/favicon-light.svg'
  }

  public setFaviconForTheme(isDarkTheme: boolean): void {
    if (!this.faviconLinkElement) return
    this.faviconLinkElement.href = isDarkTheme
      ? '/favicons/favicon-dark.svg'
      : '/favicons/favicon-light.svg'
  }
}

export const faviconManager = new FaviconManager()
export default FaviconManager
