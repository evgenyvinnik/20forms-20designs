const layoutStyles = {
  page: {
    padding: '24px',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: '#1f2933',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    margin: '0 0 8px',
  },
  subtitle: {
    margin: 0,
    maxWidth: '760px',
    lineHeight: 1.4,
  },
}

function Layout({ children }) {
  return (
    <div style={layoutStyles.page}>
      <header style={layoutStyles.header}>
        <h1 style={layoutStyles.title}>20 Forms, 20 Designs</h1>
        <p style={layoutStyles.subtitle}>
          Choose a form and a component library to see the pairing. Direct links
          to each design system sit inside the project folders for future
          builds.
        </p>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
