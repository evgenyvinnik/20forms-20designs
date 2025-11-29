#!/usr/bin/env node

/**
 * Mini-App Generator Script
 * 
 * This script generates all mini-apps for the form comparison project.
 * Each mini-app is a standalone Vite + React app that renders a single form
 * using a specific component library.
 * 
 * Usage: node scripts/generate-mini-apps.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS_DIR = path.join(ROOT_DIR, 'apps');
const SOURCE_COMPONENTS_DIR = path.join(ROOT_DIR, 'src', 'component-libraries');

// Library configurations
const LIBRARIES = [
  {
    id: 'mui',
    name: 'MUI',
    directory: 'mui',
    supportsTheme: true,
    dependencies: {
      '@mui/material': '^7.3.5',
      '@emotion/react': '^11.14.0',
      '@emotion/styled': '^11.14.1',
    },
  },
  {
    id: 'react-bootstrap',
    name: 'React Bootstrap',
    directory: 'react-bootstrap',
    supportsTheme: true,
    dependencies: {
      'react-bootstrap': '^2.10.10',
      'bootstrap': '^5.3.8',
    },
  },
  {
    id: 'evergreen',
    name: 'Evergreen',
    directory: 'evergreen',
    supportsTheme: true,
    dependencies: {
      'evergreen-ui': '^7.1.9',
    },
  },
  {
    id: 'blueprint',
    name: 'Blueprint',
    directory: 'blueprint',
    supportsTheme: true,
    dependencies: {
      '@blueprintjs/core': '^6.3.4',
      '@blueprintjs/icons': '^6.3.1',
    },
  },
  {
    id: 'radix-ui',
    name: 'Radix UI',
    directory: 'radix-ui',
    supportsTheme: true,
    dependencies: {
      '@radix-ui/themes': '^3.2.1',
    },
  },
  {
    id: 'gravity-ui',
    name: 'Gravity UI',
    directory: 'gravity-ui',
    supportsTheme: true,
    dependencies: {
      '@gravity-ui/uikit': '^7.26.1',
    },
  },
  {
    id: 'react-no-css',
    name: 'React + No CSS',
    directory: 'react-no-css',
    supportsTheme: false,
    dependencies: {},
  },
  {
    id: 'cloudscape',
    name: 'Cloudscape',
    directory: 'cloudscape-design',
    supportsTheme: true,
    dependencies: {
      '@cloudscape-design/components': '^3.0.1144',
      '@cloudscape-design/global-styles': '^1.0.49',
    },
  },
];

// Form configurations
const FORMS = [
  { id: 'user-registration', component: 'UserRegistrationForm', label: 'User Registration' },
  { id: 'user-login', component: 'UserLoginForm', label: 'User Login' },
  { id: 'password-reset', component: 'PasswordResetForm', label: 'Password Reset' },
  { id: 'two-factor-auth', component: 'TwoFactorAuthForm', label: 'Two-Factor Auth' },
  { id: 'contact-inquiry', component: 'ContactInquiryForm', label: 'Contact Inquiry' },
  { id: 'newsletter-subscription', component: 'NewsletterSubscriptionForm', label: 'Newsletter Subscription' },
  { id: 'profile-update', component: 'ProfileUpdateForm', label: 'Profile Update' },
  { id: 'password-change', component: 'PasswordChangeForm', label: 'Password Change' },
  { id: 'billing-info', component: 'BillingInfoForm', label: 'Billing Info' },
  { id: 'shipping-address', component: 'ShippingAddressForm', label: 'Shipping Address' },
  { id: 'checkout-payment', component: 'CheckoutPaymentForm', label: 'Checkout Payment' },
  { id: 'order-tracking', component: 'OrderTrackingForm', label: 'Order Tracking' },
  { id: 'appointment-request', component: 'AppointmentRequestForm', label: 'Appointment Request' },
  { id: 'event-registration', component: 'EventRegistrationForm', label: 'Event Registration' },
  { id: 'job-application', component: 'JobApplicationForm', label: 'Job Application' },
  { id: 'customer-feedback', component: 'CustomerFeedbackForm', label: 'Customer Feedback' },
  { id: 'support-ticket', component: 'SupportTicketForm', label: 'Support Ticket' },
  { id: 'onboarding-wizard', component: 'OnboardingWizardForm', label: 'Onboarding Wizard' },
  { id: 'advanced-search', component: 'AdvancedSearchForm', label: 'Advanced Search' },
  { id: 'privacy-consent', component: 'PrivacyConsentForm', label: 'Privacy Consent' },
];

// Template generators
function generatePackageJson(library, form) {
  const appName = `${library.id}-${form.id}`;
  return JSON.stringify({
    name: `@forms-comparison/${appName}`,
    private: true,
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      ...library.dependencies,
    },
    devDependencies: {
      '@vitejs/plugin-react': '^4.3.4',
      vite: '^6.0.3',
    },
  }, null, 2);
}

function generateViteConfig(library, form) {
  const appName = `${library.id}-${form.id}`;
  return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/20forms-20designs/${appName}/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
`;
}

function generateIndexHtml(library, form) {
  const title = `${form.label} - ${library.name}`;
  
  // Library-specific styles
  let libraryStyles = '';
  if (library.id === 'blueprint') {
    libraryStyles = `
    <link href="https://unpkg.com/@blueprintjs/core@6/lib/css/blueprint.css" rel="stylesheet" />
    <link href="https://unpkg.com/@blueprintjs/icons@6/lib/css/blueprint-icons.css" rel="stylesheet" />`;
  } else if (library.id === 'react-bootstrap') {
    libraryStyles = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />`;
  }
  
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>${libraryStyles}
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        min-height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
}

function generateMainJsx(library, form) {
  return `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

function generateAppJsx(library, form) {
  const themeCheck = library.supportsTheme
    ? `
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
`
    : '';

  // Library-specific wrapper and imports
  let imports = `import { useState, useEffect } from 'react';`;
  let wrapperStart = '';
  let wrapperEnd = '';

  // Simple wrapper style - just padding, minimal layout
  const wrapperStyle = `{{ padding: '16px' }}`;

  switch (library.id) {
    case 'mui':
      imports += `
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';`;
      wrapperStart = `
    const muiTheme = createTheme({ palette: { mode: theme } });
    return (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div style=${wrapperStyle}>
          <FormComponent />
        </div>
      </ThemeProvider>
    );`;
      break;

    case 'react-bootstrap':
      imports += `
import 'bootstrap/dist/css/bootstrap.min.css';`;
      wrapperStart = `
    return (
      <div data-bs-theme={theme} style=${wrapperStyle}>
        <FormComponent />
      </div>
    );`;
      break;

    case 'evergreen':
      imports += `
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
});`;
      wrapperStart = `
    const evergreenTheme = theme === 'dark' ? darkTheme : defaultTheme;
    return (
      <ThemeProvider value={evergreenTheme}>
        <div style=${wrapperStyle}>
          <FormComponent />
        </div>
      </ThemeProvider>
    );`;
      break;

    case 'blueprint':
      imports += `
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';`;
      wrapperStart = `
    const className = theme === 'dark' ? 'bp5-dark' : '';
    return (
      <div className={className} style=${wrapperStyle}>
        <FormComponent />
      </div>
    );`;
      break;

    case 'radix-ui':
      imports += `
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';`;
      wrapperStart = `
    return (
      <Theme appearance={theme} accentColor="indigo" grayColor="slate" radius="medium">
        <div style=${wrapperStyle}>
          <FormComponent />
        </div>
      </Theme>
    );`;
      break;

    case 'gravity-ui':
      imports += `
import { ThemeProvider } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';`;
      wrapperStart = `
    return (
      <ThemeProvider theme={theme}>
        <div style=${wrapperStyle}>
          <FormComponent />
        </div>
      </ThemeProvider>
    );`;
      break;

    case 'react-no-css':
      imports = `import { useState, useEffect } from 'react';`;
      wrapperStart = `
    return (
      <div style={{ padding: '16px', background: theme === 'dark' ? '#1a1a1a' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
        <FormComponent />
      </div>
    );`;
      break;

    case 'cloudscape':
      imports += `
import '@cloudscape-design/global-styles/index.css';
import { applyMode, Mode } from '@cloudscape-design/global-styles';`;
      wrapperStart = `
    useEffect(() => {
      applyMode(theme === 'dark' ? Mode.Dark : Mode.Light);
    }, [theme]);

    return (
      <div style=${wrapperStyle}>
        <FormComponent />
      </div>
    );`;
      break;

    default:
      wrapperStart = `
    return (
      <div style=${wrapperStyle}>
        <FormComponent />
      </div>
    );`;
  }

  return `${imports}
import FormComponent from './form/${form.component}';

function App() {${themeCheck}${wrapperStart}
}

export default App;
`;
}

// Check if form component exists in source
function formComponentExists(library, form) {
  const sourceFile = path.join(SOURCE_COMPONENTS_DIR, library.directory, `${form.component}.jsx`);
  return fs.existsSync(sourceFile);
}

// Copy form component from source
function copyFormComponent(library, form, targetDir) {
  const sourceFile = path.join(SOURCE_COMPONENTS_DIR, library.directory, `${form.component}.jsx`);
  const targetFormDir = path.join(targetDir, 'src', 'form');
  const targetFile = path.join(targetFormDir, `${form.component}.jsx`);

  fs.mkdirSync(targetFormDir, { recursive: true });
  
  if (fs.existsSync(sourceFile)) {
    let content = fs.readFileSync(sourceFile, 'utf-8');
    
    // Fix any alias imports like @/ to relative imports
    content = content.replace(/@\//g, '../../../');
    
    // Fix imports to constants/locationOptions - use local copy
    content = content.replace(/['"]\.\.\/\.\.\/constants\/locationOptions['"]/g, "'./locationOptions'");
    
    fs.writeFileSync(targetFile, content);
    return true;
  }
  
  return false;
}

// Copy additional utility files if needed (e.g., formStyles.js for blueprint)
function copyUtilityFiles(library, form, targetDir) {
  const sourceDir = path.join(SOURCE_COMPONENTS_DIR, library.directory);
  const targetFormDir = path.join(targetDir, 'src', 'form');
  
  // Copy formStyles.js if it exists (used by Blueprint)
  const formStylesSource = path.join(sourceDir, 'formStyles.js');
  if (fs.existsSync(formStylesSource)) {
    const targetFile = path.join(targetFormDir, 'formStyles.js');
    fs.copyFileSync(formStylesSource, targetFile);
  }
  
  // Copy common.jsx if it exists (used by Gravity UI)
  const commonSource = path.join(sourceDir, 'common.jsx');
  if (fs.existsSync(commonSource)) {
    const targetFile = path.join(targetFormDir, 'common.jsx');
    fs.copyFileSync(commonSource, targetFile);
  }
  
  // Copy GravityUiWrapper.jsx if needed
  const wrapperSource = path.join(sourceDir, 'GravityUiWrapper.jsx');
  if (fs.existsSync(wrapperSource)) {
    const targetFile = path.join(targetFormDir, 'GravityUiWrapper.jsx');
    fs.copyFileSync(wrapperSource, targetFile);
  }
  
  // Copy locationOptions.js if needed (used by ShippingAddressForm and others)
  const locationOptionsSource = path.join(ROOT_DIR, 'src', 'constants', 'locationOptions.js');
  const formSourceFile = path.join(sourceDir, `${form.component}.jsx`);
  if (fs.existsSync(formSourceFile) && fs.existsSync(locationOptionsSource)) {
    const formContent = fs.readFileSync(formSourceFile, 'utf-8');
    if (formContent.includes('locationOptions')) {
      const targetFile = path.join(targetFormDir, 'locationOptions.js');
      fs.copyFileSync(locationOptionsSource, targetFile);
    }
  }
}

// Generate a single mini-app
function generateMiniApp(library, form) {
  const appName = `${library.id}-${form.id}`;
  const appDir = path.join(APPS_DIR, appName);
  const srcDir = path.join(appDir, 'src');

  // Check if form component exists
  if (!formComponentExists(library, form)) {
    console.log(`⚠️  Skipping ${appName}: Form component not found`);
    return false;
  }

  // Create directories
  fs.mkdirSync(srcDir, { recursive: true });

  // Generate files
  fs.writeFileSync(path.join(appDir, 'package.json'), generatePackageJson(library, form));
  fs.writeFileSync(path.join(appDir, 'vite.config.js'), generateViteConfig(library, form));
  fs.writeFileSync(path.join(appDir, 'index.html'), generateIndexHtml(library, form));
  fs.writeFileSync(path.join(srcDir, 'main.jsx'), generateMainJsx(library, form));
  fs.writeFileSync(path.join(srcDir, 'App.jsx'), generateAppJsx(library, form));

  // Copy form component
  copyFormComponent(library, form, appDir);
  
  // Copy utility files
  copyUtilityFiles(library, form, appDir);

  console.log(`✅ Generated ${appName}`);
  return true;
}

// Main execution
function main() {
  console.log('🚀 Generating mini-apps...\n');
  
  let generated = 0;
  let skipped = 0;

  for (const library of LIBRARIES) {
    console.log(`\n📦 Processing ${library.name}...`);
    
    for (const form of FORMS) {
      if (generateMiniApp(library, form)) {
        generated++;
      } else {
        skipped++;
      }
    }
  }

  console.log(`\n✨ Done! Generated ${generated} mini-apps, skipped ${skipped}`);
  console.log(`\nNext steps:`);
  console.log(`  1. Run: npm install`);
  console.log(`  2. Run: npm run build`);
}

main();

