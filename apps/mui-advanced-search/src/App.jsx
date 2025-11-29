import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import FormComponent from './form/AdvancedSearchForm';

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

    const muiTheme = createTheme({ palette: { mode: theme } });
    return (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div style={{ padding: '16px' }}>
          <FormComponent />
        </div>
      </ThemeProvider>
    );
}

export default App;
