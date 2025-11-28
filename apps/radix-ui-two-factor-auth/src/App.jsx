import { useState, useEffect } from 'react';
import { Theme, Container, Card, Heading, Box } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import FormComponent from './form/TwoFactorAuthForm';

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
      <Theme appearance={theme} accentColor="indigo" grayColor="slate" radius="medium">
        <Box style={{ minHeight: '100vh', background: 'var(--color-background)', padding: '24px' }}>
          <Container size="2">
            <Card size="3">
              <Heading size="5" mb="4">Two-Factor Auth</Heading>
              <FormComponent />
            </Card>
          </Container>
        </Box>
      </Theme>
    );
}

export default App;
