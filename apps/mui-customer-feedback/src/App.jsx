import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Paper, Typography } from '@mui/material';
import FormComponent from './form/CustomerFeedbackForm';

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
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h1" gutterBottom>
              Customer Feedback
            </Typography>
            <FormComponent />
          </Paper>
        </Container>
      </ThemeProvider>
    );
}

export default App;
