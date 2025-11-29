import { useState, useEffect } from 'react';
import FormComponent from './form/BillingInfoForm';

function App() {
    return (
      <div style={{ padding: '16px', background: theme === 'dark' ? '#1a1a1a' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
        <FormComponent />
      </div>
    );
}

export default App;
