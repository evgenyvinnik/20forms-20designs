import { useState, useEffect } from 'react';
import { ThemeProvider, Container, Card, Text } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import FormComponent from './form/UserRegistrationForm';

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
      <ThemeProvider theme={theme}>
        <div style={{ minHeight: '100vh', background: 'var(--g-color-base-background)', padding: '24px' }}>
          <Container maxWidth="s">
            <Card style={{ padding: '24px' }}>
              <Text variant="header-1" as="h1" style={{ marginBottom: '16px' }}>User Registration</Text>
              <FormComponent />
            </Card>
          </Container>
        </div>
      </ThemeProvider>
    );
}

export default App;
