import { useState, useEffect } from 'react';
import FormComponent from './form/TwoFactorAuthForm';

function App() {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: theme === 'dark' ? '#1a1a1a' : '#f5f5f5', 
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '24px' 
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto', background: theme === 'dark' ? '#2a2a2a' : '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Two-Factor Auth</h1>
          <FormComponent />
        </div>
      </div>
    );
}

export default App;
