import styles from '../styles'

function Layout({ children }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>20 Forms, 20 Designs</h1>
        <p style={styles.subtitle}>
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
