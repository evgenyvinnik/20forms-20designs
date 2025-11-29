import { useState, useEffect } from 'react';
import '@cloudscape-design/global-styles/index.css';
import { applyMode, Mode } from '@cloudscape-design/global-styles';
import FormComponent from './form/PasswordChangeForm';

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
      <div style={{ padding: '16px' }}>
        <FormComponent />
      </div>
    );
}

export default App;
