import { useState, useEffect } from 'react';
import '@cloudscape-design/global-styles/index.css';
import { Container, Header, SpaceBetween, Box } from '@cloudscape-design/components';
import { applyMode, Mode } from '@cloudscape-design/global-styles';
import FormComponent from './form/ContactInquiryForm';

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

    useEffect(() => {
      applyMode(theme === 'dark' ? Mode.Dark : Mode.Light);
    }, [theme]);

    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-background-layout-main)', padding: '24px' }}>
        <Container header={<Header variant="h1">Contact Inquiry</Header>}>
          <SpaceBetween size="l">
            <FormComponent />
          </SpaceBetween>
        </Container>
      </div>
    );
}

export default App;
