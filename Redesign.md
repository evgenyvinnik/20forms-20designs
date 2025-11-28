## 0. Context

We are building a **UI comparison playground** that showcases the **same forms** implemented using **different React component libraries**, e.g.:

- MUI
- Chakra UI
- shadcn/ui
- (future: Radix UI, Ant Design, etc.)

The existing prototype is a **single SPA** (hosted on GitHub Pages) where:

- Multiple design systems are installed in one app.
- Their global CSS/resets/preflight **bleed into each other**, causing visual and behavioral conflicts.

This spec describes a refactor to a **multi-app + iframe architecture (Option B)** to achieve **hard isolation** between implementations.

---

## 1. Goals & Non-Goals

### 1.1 Goals

1. **CSS Isolation**
   - Each combination of **(design system, form)** must be fully isolated:
     - No CSS bleed between libraries.
     - No shared Tailwind preflight, MUI/Chakra globals, etc.

2. **Comparison Matrix**
   - Ability to render a **matrix** of:
     - Rows = Forms (e.g. Login, Checkout, Profile, etc.).
     - Columns = Libraries (MUI, Chakra, shadcn, …).
   - Each cell is an iframe pointing to a specific **mini-app**:
     - One **library + form** implementation.

3. **Static Hosting on GitHub Pages**
   - Everything must be **static-buildable**.
   - Served from GitHub Pages (likely `/docs` folder).
   - No server-side logic required.

4. **Simple Extensibility**
   - Minimal steps to add:
     - A new library.
     - A new form.
   - Steps should be:
     1. Create a new mini-app (or copy an existing one).
     2. Implement the form.
     3. Add one entry in shell config.

5. **Reuse Existing Prototype**
   - Reuse as much of the existing code as possible:
     - Existing form definitions.
     - Existing implementations per library.
   - But reorganized into the new structure.

### 1.2 Non-Goals

1. No need for **Module Federation** or complex microfrontend tooling.
2. No need to **synchronize form state** across iframes.
3. No need for **single sign-on** or rich communication between cells.
4. No requirement to have a **shared runtime** (bundles can be duplicated between apps).

---

## 2. High-Level Architecture

We will use:

- One **Shell App**: React SPA that renders the comparison matrix using `<iframe>`s.
- One **Mini-App per (Library, Form) pair**:
  - Example: `mui-login`, `mui-checkout`, `chakra-login`, `shadcn-profile`, etc.
  - Each mini-app is a **standalone Vite + React** app.
  - Each mini-app renders exactly **one form implementation**.

### 2.1 Overview Diagram (conceptual)

- Shell App:
  - Deployed as `/index.html`.
  - Knows about all `(library, form)` combinations.
  - Renders a grid of iframes.

- Mini-Apps:
  - Deployed at paths like:
    - `/mui-login/index.html`
    - `/mui-checkout/index.html`
    - `/chakra-login/index.html`
    - `/shadcn-profile/index.html`
  - Each has its **own `<head>`**, CSS, and JS.

Shell `<iframe>` `src` mapping (Option B):

```text
/<lib>-<form>/index.html

# examples:
mui-login/index.html
mui-checkout/index.html
chakra-login/index.html
shadcn-profile/index.html
3. Repository & Directory Structure
We will use a monorepo-style layout with workspaces.

3.1 Desired Top-Level Structure
text
Copy code
/.
├─ package.json              # root with workspaces
├─ pnpm-lock.yaml / package-lock.json
├─ docs/                     # GitHub Pages deployment root (build output)
├─ apps/
│  ├─ shell/                 # main comparison UI
│  ├─ mui-login/
│  ├─ mui-checkout/
│  ├─ mui-profile/
│  ├─ chakra-login/
│  ├─ chakra-checkout/
│  ├─ chakra-profile/
│  ├─ shadcn-login/
│  ├─ shadcn-checkout/
│  └─ shadcn-profile/
└─ scripts/
   └─ copy-builds-to-docs.mjs (or .js/.ts – build orchestration)
Note: The exact list of forms and libraries can be adjusted. The spec uses login, checkout, profile as examples.

3.2 Root package.json (Workspaces)
Requirements for root package.json:

Define workspaces for all apps.

Include scripts to:

build all apps,

then copy their dist outputs into docs/.

Example (pseudo):

jsonc
Copy code
{
  "name": "form-library-comparison",
  "private": true,
  "workspaces": [
    "apps/shell",
    "apps/mui-login",
    "apps/mui-checkout",
    "apps/mui-profile",
    "apps/chakra-login",
    "apps/chakra-checkout",
    "apps/chakra-profile",
    "apps/shadcn-login",
    "apps/shadcn-checkout",
    "apps/shadcn-profile"
  ],
  "scripts": {
    "build": "npm run build:apps && npm run build:bundle-docs",
    "build:apps": "npm run build --workspace apps/shell && ... (for each mini-app)",
    "build:bundle-docs": "node ./scripts/copy-builds-to-docs.mjs"
  }
}
The agent should generate a DRY version (looping or using npm-run-all) to avoid manually listing every app in scripts.

4. Shell App Specification (apps/shell)
The shell app is a React SPA (Vite-based) that:

Displays overall documentation / explanation of the playground.

Renders a table or grid: rows = forms, columns = libraries.

Each cell is an <iframe> that loads a specific mini-app.

4.1 Shell Tech Stack
React (TypeScript preferred).

Vite.

Simple CSS / Tailwind / component lib is allowed, but:

Shell CSS must not be shared with mini-apps (this is guaranteed by iframes).

4.2 Shell Data Model
In apps/shell/src/config.ts (or similar), define:

ts
Copy code
export type LibraryId = 'mui' | 'chakra' | 'shadcn';

export type FormId = 'login' | 'checkout' | 'profile';

export const LIBRARIES: { id: LibraryId; label: string }[] = [
  { id: 'mui', label: 'MUI' },
  { id: 'chakra', label: 'Chakra UI' },
  { id: 'shadcn', label: 'shadcn/ui' }
];

export const FORMS: { id: FormId; label: string }[] = [
  { id: 'login', label: 'Login form' },
  { id: 'checkout', label: 'Checkout form' },
  { id: 'profile', label: 'Profile settings form' }
];
4.3 Iframe URL Convention
Define a helper:

ts
Copy code
export const buildIframeSrc = (lib: LibraryId, form: FormId): string =>
  `./${lib}-${form}/index.html`;
This assumes the GitHub Pages structure:

text
Copy code
/docs/
  index.html            (shell)
  mui-login/index.html
  mui-checkout/index.html
  ...
4.4 Shell Layout
The agent should create a main React component that:

Renders a header with some explanation.

Renders a table (or CSS grid) that:

First row: blank cell + library names.

First column: form names.

Cells: iframes.

Example structure (pseudo):

tsx
Copy code
// apps/shell/src/App.tsx
import { LIBRARIES, FORMS, buildIframeSrc } from './config';

const IframeCell = ({ libId, formId }: { libId: LibraryId; formId: FormId }) => (
  <iframe
    title={`${libId}-${formId}`}
    src={buildIframeSrc(libId, formId)}
    style={{
      width: '100%',
      height: 420, // tweakable; should show full form without scroll if possible
      border: '1px solid #ddd',
      borderRadius: 8
    }}
    sandbox="allow-scripts allow-forms allow-same-origin"
  />
);

const App = () => (
  <main style={{ padding: 24 }}>
    <h1>Form Library Comparison</h1>
    <p>
      This playground compares the same forms implemented using different React design systems.
      Each cell below is fully isolated in its own iframe, so styles cannot leak between libraries.
    </p>

    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 24 }}>
      <thead>
        <tr>
          <th style={{ padding: 8 }}></th>
          {LIBRARIES.map(lib => (
            <th key={lib.id} style={{ padding: 8, textAlign: 'center' }}>
              {lib.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {FORMS.map(form => (
          <tr key={form.id}>
            <td style={{ padding: 8, fontWeight: 600, verticalAlign: 'top' }}>{form.label}</td>
            {LIBRARIES.map(lib => (
              <td key={lib.id} style={{ padding: 8, verticalAlign: 'top' }}>
                <IframeCell libId={lib.id} formId={form.id} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);
The agent can refine styling later but must keep the structural idea.

5. Mini-App Specification (Per Library + Form)
Each mini-app:

Lives under apps/<lib>-<form>/.

Is a standalone Vite + React app.

Has only one page: index.html -> main.tsx -> <App />.

<App /> renders the single form implementation for that (lib, form) pair.

5.1 Mini-App Tech Stack
Common for all mini-apps:

Vite + React (TS preferred).

Each mini-app can use:

Its own CSS tooling:

MUI:

MUI core, MUI theme, Emotion.

Chakra:

ChakraProvider, theme, Emotion.

shadcn:

Tailwind + shadcn components + required providers.

Global CSS, resets, preflight:

Allowed, because they are scoped to the iframe.

5.2 Mini-App Entrypoint
Each mini-app should have the standard Vite React structure:

text
Copy code
apps/mui-login/
  index.html
  vite.config.ts
  tsconfig.json
  package.json
  src/
    main.tsx
    App.tsx
    form/LoginForm.tsx
    styles.css (if needed)
main.tsx:

tsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
App.tsx must:

Wrap the form in the library’s theme/provider.

Render the form plus any minimal padding.

Example for MUI:

tsx
Copy code
// apps/mui-login/src/App.tsx
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme, Container, Paper, Typography } from '@mui/material';
import { LoginForm } from './form/LoginForm';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login (MUI)
        </Typography>
        <LoginForm />
      </Paper>
    </Container>
  </ThemeProvider>
);

export default App;
Chakra / shadcn apps should follow the same pattern with their respective providers.

5.3 Form Behavior
Each mini-app form should:

Implement the same logical fields and validation rules as other libraries’ implementation for that form.

Handle submission with some simple UI feedback:

e.g., inline “Submitted!” message, or console log.

Not rely on external APIs for core behavior (keep it demo-friendly).

If the existing prototype already includes validation logic and submissions:

The agent should factor out the logic into reusable utilities per form where possible, then reuse across libraries (if that doesn’t overly complicate the structure).

Otherwise: copying logic into each mini-app is acceptable for now.

6. GitHub Pages Deployment
We assume:

GitHub Pages is configured to serve from the /docs directory in the repo root.

The build goal is:

text
Copy code
/docs
├─ index.html               # from apps/shell/dist
├─ assets/...               # shell assets
├─ mui-login/
│  ├─ index.html            # from apps/mui-login/dist
│  └─ assets/...
├─ mui-checkout/
├─ mui-profile/
├─ chakra-login/
├─ chakra-checkout/
├─ chakra-profile/
├─ shadcn-login/
├─ shadcn-checkout/
└─ shadcn-profile/
6.1 Build Process
Build all apps

For example:

bash
Copy code
npm run build --workspace apps/shell
npm run build --workspace apps/mui-login
npm run build --workspace apps/mui-checkout
...
Copy dist outputs into docs/

For each app:

apps/shell/dist → docs/

apps/mui-login/dist → docs/mui-login/

apps/mui-checkout/dist → docs/mui-checkout/

etc.

A script scripts/copy-builds-to-docs.mjs should:

Remove/clean existing docs/.

Copy each dist directory to the correct target.

Ensure docs/index.html is from the shell app.

The agent should implement this script using Node fs/fs-extra or similar.

GitHub Actions (optional)

CI can run npm install, npm run build, then commit/publish docs/.

7. Migration Plan from Existing Prototype
The current state (assumed):

Single SPA with:

Multiple design systems installed.

Shared routing or component toggles for different demos/forms.

CSS conflicts.

7.1 Migration Steps (High-Level)
Create new repo structure

Add apps/shell and one example mini-app (e.g., apps/mui-login).

Copy the shell UI from the prototype into apps/shell (if any).

Configure docs/ build flow.

Extract first form implementation

Find the MUI implementation of the login form in the existing prototype.

Move the relevant component and styles into apps/mui-login/src/form/LoginForm.tsx.

Wire up the MUI mini-app App.tsx to use it.

Deploy a minimal vertical slice

Ensure the shell renders a matrix with only one row and one column:

LIBRARIES = [mui]

FORMS = [login]

Ensure the shell iframe renders /mui-login/index.html successfully on GitHub Pages.

Incrementally add other libraries & forms

Create chakra-login, shadcn-login apps.

Copy existing Chakra/shadcn login form code.

Add them to the matrix.

Once login form row is stable, repeat for checkout, profile, etc.

Remove old combined SPA

Once all necessary forms are migrated into mini-apps and the shell matrix works:

Delete or archive the old all-in-one SPA code.

Ensure docs/ only contains the new architecture.

8. Extensibility Rules
When adding a new library:

Create new mini-apps for each form:

Example: adding radix as a new library:

apps/radix-login

apps/radix-checkout

apps/radix-profile

Add them to:

workspaces in root package.json.

Shell config LIBRARIES with { id: 'radix', label: 'Radix UI' }.

Build scripts & docs copy script.

Implement the forms using that library’s components.

When adding a new form:

Decide new FormId, e.g. 'address', 'multi-step'.

In shell config:

Add { id: 'address', label: 'Address form' } to FORMS.

Create a new mini-app for each library:

apps/mui-address, apps/chakra-address, apps/shadcn-address, etc.

Implement the new form in each mini-app.

Update workspaces, scripts, and docs copy script accordingly.

9. Optional: Shared Schema Package (Future Enhancement)
Not required for initial refactor, but nice to have later:

Create /packages/form-schema/ with:

Type definitions for fields.

loginFormSchema, checkoutFormSchema, etc.

Each mini-app imports that schema and maps it to that library’s components.

This ensures all implementations are logically identical in fields and validations.

10. Acceptance Criteria
The refactor is complete when:

Matrix Renders on GitHub Pages

Visiting the root GitHub Pages URL loads the shell.

Shell shows a table/grid of (form × library) cells.

Each cell’s iframe loads and renders the appropriate form.

CSS Isolation Verified

Changing global CSS in mui-* mini-apps does not alter Chakra/shadcn cells.

Tailwind preflight in shadcn mini-apps does not affect MUI/Chakra cells.

No cross-cell layout or styling regressions.

No Direct Imports Between Libraries

MUI components are not imported by Chakra or shadcn apps, etc.

Shared code (if any) is limited to non-UI utilities and types.

Build & Deploy Flow is Single-Command

A single root command (npm run build or similar) builds:

Shell.

All mini-apps.

Populates docs/ with the correct structure.

GitHub Pages serves the resulting site correctly.

Existing Behavior Preserved

The forms behave similarly to the existing prototype:

Fields, validation, and submission handling should be equivalent (within reason).