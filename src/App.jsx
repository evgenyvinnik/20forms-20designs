import { Route, Routes, Link } from 'react-router'

const plannedForms = [
  'Account registration',
  'Profile update',
  'Password reset',
  'Newsletter signup',
  'Feedback survey',
]

function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>20 Forms, 20 Designs</h1>
        <p>Explorations of form experiences built with React and plain JavaScript.</p>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

function Home() {
  return (
    <Layout>
      <p>The gallery is being prepared. Check back soon for the first forms.</p>
      <section>
        <h2>Planned forms</h2>
        <ul>
          {plannedForms.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

function About() {
  return (
    <Layout>
      <p>
        Each form will highlight a different design approach while keeping the code in
        JavaScript and React for flexibility and clarity.
      </p>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
