import { useState, useEffect } from 'react';
import { ThemeProvider, defaultTheme, mergeTheme } from 'evergreen-ui';

// Custom dark theme for Evergreen
const darkTheme = mergeTheme(defaultTheme, {
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      default: '#1a1a2e',
      tint1: '#16213e',
      tint2: '#0f3460',
    },
    border: {
      ...defaultTheme.colors.border,
      default: '#374151',
    },
    text: {
      ...defaultTheme.colors.text,
      default: '#e5e7eb',
      muted: '#9ca3af',
    },
  },
});
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

    const evergreenTheme = theme === 'dark' ? darkTheme : defaultTheme;
    return (
      <ThemeProvider value={evergreenTheme}>
        <div style={{ padding: '16px' }}>
          <FormComponent />
        </div>
      </ThemeProvider>
    );
}

export default App;
