import { useState, useEffect } from 'react';
import { Pane, Heading, Card, ThemeProvider, defaultTheme, mergeTheme } from 'evergreen-ui';

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
    const bgColor = theme === 'dark' ? '#1a1a2e' : undefined;
    const cardBg = theme === 'dark' ? '#16213e' : 'white';
    const textColor = theme === 'dark' ? '#e5e7eb' : undefined;
    
    return (
      <ThemeProvider value={evergreenTheme}>
        <Pane padding={24} background={bgColor || "tint1"} minHeight="100vh">
          <Card elevation={1} padding={24} maxWidth={600} marginX="auto" background={cardBg}>
            <Heading size={600} marginBottom={16} color={textColor}>User Registration</Heading>
            <FormComponent />
          </Card>
        </Pane>
      </ThemeProvider>
    );
}

export default App;
