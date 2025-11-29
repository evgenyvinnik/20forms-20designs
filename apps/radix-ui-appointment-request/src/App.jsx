import { useState, useEffect } from 'react';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import FormComponent from './form/AppointmentRequestForm';

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
        <div style={{ padding: '16px' }}>
          <FormComponent />
        </div>
      </Theme>
    );
}

export default App;
