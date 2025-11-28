import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import FormComponent from './form/OnboardingWizardForm';

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('theme') === 'dark' ? 'dark' : 'light';
  });

  // Listen for theme changes from parent
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

    return (
      <div data-bs-theme={theme} style={{ minHeight: '100vh', background: theme === 'dark' ? '#212529' : '#f8f9fa', padding: '24px' }}>
        <Container>
          <Card>
            <Card.Header as="h5">Onboarding Wizard</Card.Header>
            <Card.Body>
              <FormComponent />
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
}

export default App;
