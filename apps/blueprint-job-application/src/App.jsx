import { useState, useEffect } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { Card, H3 } from '@blueprintjs/core';
import FormComponent from './form/JobApplicationForm';

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

    const className = theme === 'dark' ? 'bp5-dark' : '';
    return (
      <div className={className} style={{ minHeight: '100vh', background: theme === 'dark' ? '#252a31' : '#f5f8fa', padding: '24px' }}>
        <Card elevation={2} style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
          <H3>Job Application</H3>
          <div style={{ marginTop: '16px' }}>
            <FormComponent />
          </div>
        </Card>
      </div>
    );
}

export default App;
