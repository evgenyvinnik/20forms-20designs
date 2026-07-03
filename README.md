# 20 Forms, 48 Designs

> **Form Library Comparison Playground** — Compare the same forms implemented across different React design systems with full CSS isolation.

## Overview

This is project that I wanted to implement for quite some time. So far in my professional experience I have worked with a lot of various design systems and I was always fascinated how the same form could look so much differently using different component library.

This is how this project was born. It represents 20 extremely common forms that were built using 48 popular React design systems. Each form is rendered in a fully isolated iframe, preventing any CSS bleed between different design systems.

**[Live Demo →](https://evgenyvinnik.github.io/20forms-20designs/)**

## ✨ Features

- **960 Form Implementations** — 48 libraries × 20 forms, each running in an isolated context
- **CSS Isolation** — No style conflicts between design systems (iframe-based architecture)
- **Theme Support** — Light/dark mode toggle for libraries that support theming
- **Comparison Matrix** — Side-by-side comparison of forms across libraries
- **Static Deployment** — Fully static, hosted on GitHub Pages

## 🏗️ Architecture

This project uses a **monorepo + iframe architecture** for complete CSS isolation:

```
20forms-20designs/
├── apps/
│   ├── shell/                    # Main comparison UI
│   ├── mui/                      # MUI (all 20 forms)
│   ├── chakra/                   # Chakra UI (all 20 forms)
│   ├── antd/                     # Ant Design (all 20 forms)
│   └── ... (49 apps total: 48 libraries + shell)
├── scripts/
│   ├── build-all.mjs             # Build orchestration
│   └── copy-builds-to-dist.mjs   # Deployment bundler
└── public/                       # Static assets
```

### Why Separate Apps Per Library?

You might wonder: _why build 48 separate applications instead of one unified app?_ The answer comes down to **CSS isolation** — the core technical challenge of this project.

**The Problem with a Single SPA:**

When multiple design systems coexist in one application, their styles inevitably conflict:

- MUI's CSS baseline overrides Chakra's default styles
- Tailwind's preflight resets Blueprint's component styling
- Global resets from one library break layouts in another

We initially attempted a single-SPA approach and encountered exactly these issues — forms looked broken, buttons had wrong colors, and spacing was inconsistent across libraries.

**The Iframe Solution:**

Each `<iframe>` creates a completely isolated browsing context with its own:

- `<head>` element and stylesheets
- CSS cascade and specificity rules
- JavaScript runtime

This means MUI's `CssBaseline`, Tailwind's preflight, and Chakra's global styles all live in separate worlds — they literally cannot interfere with each other.

**Why Not Shadow DOM or CSS Modules?**

- **Shadow DOM**: Doesn't fully isolate CSS custom properties, and many design systems rely on global providers/contexts that don't work well across shadow boundaries
- **CSS Modules / Scoped CSS**: Only scopes class names, not global resets, CSS variables, or inherited styles that design systems heavily depend on
- **CSS-in-JS runtime isolation**: Complex to implement across different CSS-in-JS solutions (Emotion, styled-components, Stitches, etc.)

**The Trade-off:**

Yes, building 48 separate apps means:

- Longer build times (~2-3 minutes for full build)
- Duplicated React/library bundles across apps
- More complex deployment orchestration

But it guarantees:

- **Zero CSS bleed** between any two design systems
- **True visual fidelity** — each form looks exactly as it would in a real project using that library
- **Independent theming** — light/dark mode works correctly per-library without conflicts
- **Flexible comparison** — users can view any combination of forms and libraries side-by-side

## 📋 Forms Implemented

1. User registration / sign up
2. User login / sign in
3. Password reset / forgot password request
4. Two-factor authentication code entry
5. Contact or support inquiry
6. Newsletter or marketing subscription
7. Profile information update
8. Account security and password change
9. Billing information capture
10. Shipping address capture
11. Checkout with payment details
12. Order tracking lookup
13. Appointment or booking request
14. Event registration / RSVP
15. Job application submission
16. Customer feedback or satisfaction survey
17. Support ticket submission
18. Multi-step onboarding wizard
19. Advanced search with filters
20. Privacy, consent, and communication preferences

## 🎨 Component Libraries

### ✅ Implemented Libraries

All libraries implement the same 20 forms with identical content, labels, and field structures. The **React (No CSS)** implementation serves as the canonical reference — every other library's forms match its exact structure and text content, differing only in styling and component usage.

#### Reference Implementation

| Library                              | Theme Support | Repository                                                          |
| ------------------------------------ | ------------- | ------------------------------------------------------------------- |
| [React (No CSS)](https://react.dev/) | ✅ Light/Dark | [GitHub](https://github.com/facebook/react) — _Canonical reference_ |

#### Design System Libraries

| #   | Library                                                                               | Theme Support | Repository                                                         |
| --- | ------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------ |
| 1   | [Ant Design](https://ant.design/)                                                     | ✅ Light/Dark | [GitHub](https://github.com/ant-design/ant-design)                 |
| 2   | [Arco Design](https://arco.design/)                                                   | ✅ Light/Dark | [GitHub](https://github.com/arco-design/arco-design)               |
| 3   | [Ariakit](https://ariakit.org/)                                                       | ✅ Light/Dark | [GitHub](https://github.com/ariakit/ariakit)                       |
| 4   | [Ark UI](https://ark-ui.com/)                                                         | ✅ Light/Dark | [GitHub](https://github.com/chakra-ui/ark)                         |
| 5   | [Astryx](https://astryx.atmeta.com/)                                                  | ✅ Light/Dark | [GitHub](https://github.com/facebook/astryx)                       |
| 6   | [Atlassian Atlaskit](https://atlassian.design/components)                             | ✅ Light/Dark | [Bitbucket](https://bitbucket.org/atlassian/atlassian-frontend/)   |
| 7   | [Base UI](https://base-ui.com/)                                                       | ✅ Light/Dark | [GitHub](https://github.com/mui/base-ui)                           |
| 8   | [Base Web](https://baseweb.design/)                                                   | ✅ Light/Dark | [GitHub](https://github.com/uber/baseweb)                          |
| 9   | [Blueprint](https://blueprintjs.com/)                                                 | ✅ Light/Dark | [GitHub](https://github.com/palantir/blueprint)                    |
| 10  | [Braid Design System](https://seek-oss.github.io/braid-design-system/)                | ✅ Light/Dark | [GitHub](https://github.com/seek-oss/braid-design-system)          |
| 11  | [Carbon Design System](https://carbondesignsystem.com/)                               | ✅ Light/Dark | [GitHub](https://github.com/carbon-design-system/carbon)           |
| 12  | [Chakra UI](https://chakra-ui.com/)                                                   | ✅ Light/Dark | [GitHub](https://github.com/chakra-ui/chakra-ui)                   |
| 13  | [Cloudscape](https://cloudscape.design/)                                              | ✅ Light/Dark | [GitHub](https://github.com/cloudscape-design/components)          |
| 14  | [CoreUI](https://coreui.io/react/)                                                    | ✅ Light/Dark | [GitHub](https://github.com/coreui/coreui-react)                   |
| 15  | [DaisyUI](https://daisyui.com/)                                                       | ✅ Light/Dark | [GitHub](https://github.com/saadeghi/daisyui)                      |
| 16  | [Elastic UI (EUI)](https://eui.elastic.co/)                                           | ✅ Light/Dark | [GitHub](https://github.com/elastic/eui)                           |
| 17  | [Evergreen](https://evergreen.segment.com/)                                           | ⚠️ Light only | [GitHub](https://github.com/segmentio/evergreen)                   |
| 18  | [Flowbite React](https://flowbite-react.com/)                                         | ✅ Light/Dark | [GitHub](https://github.com/themesberg/flowbite-react)             |
| 19  | [Fluent UI](https://developer.microsoft.com/en-us/fluentui)                           | ✅ Light/Dark | [GitHub](https://github.com/microsoft/fluentui)                    |
| 20  | [gluestack-ui](https://gluestack.io/)                                                 | ✅ Light/Dark | [GitHub](https://github.com/gluestack/gluestack-ui)                |
| 21  | [Gravity UI](https://gravity-ui.com/)                                                 | ✅ Light/Dark | [GitHub](https://github.com/gravity-ui/uikit)                      |
| 22  | [Grommet](https://v2.grommet.io/)                                                     | ✅ Light/Dark | [GitHub](https://github.com/grommet/grommet)                       |
| 23  | [Headless UI](https://headlessui.com/)                                                | ✅ Light/Dark | [GitHub](https://github.com/tailwindlabs/headlessui)               |
| 24  | [HeroUI](https://heroui.com/)                                                         | ✅ Light/Dark | [GitHub](https://github.com/heroui-inc/heroui)                     |
| 25  | [Joy UI](https://v7.mui.com/joy-ui/getting-started/)                                  | ✅ Light/Dark | [GitHub](https://github.com/mui/material-ui)                       |
| 26  | [Mantine](https://mantine.dev/)                                                       | ✅ Light/Dark | [GitHub](https://github.com/mantinedev/mantine)                    |
| 27  | [Material Tailwind](https://www.material-tailwind.com/)                               | ✅ Light/Dark | [GitHub](https://github.com/creativetimofficial/material-tailwind) |
| 28  | [MUI](https://mui.com/)                                                               | ✅ Light/Dark | [GitHub](https://github.com/mui/material-ui)                       |
| 29  | [Park UI](https://park-ui.com/)                                                       | ✅ Light/Dark | [GitHub](https://github.com/cschroeter/park-ui)                    |
| 30  | [PatternFly](https://www.patternfly.org/)                                             | ✅ Light/Dark | [GitHub](https://github.com/patternfly/patternfly-react)           |
| 31  | [Pinterest Gestalt](https://gestalt.pinterest.systems/)                               | ✅ Light/Dark | [GitHub](https://github.com/pinterest/gestalt)                     |
| 32  | [PrimeReact](https://primereact.org/)                                                 | ✅ Light/Dark | [GitHub](https://github.com/primefaces/primereact)                 |
| 33  | [Primer React](https://primer.style/react/)                                           | ✅ Light/Dark | [GitHub](https://github.com/primer/react)                          |
| 34  | [Radix UI](https://www.radix-ui.com/)                                                 | ✅ Light/Dark | [GitHub](https://github.com/radix-ui/primitives)                   |
| 35  | [React Bootstrap](https://react-bootstrap.netlify.app/)                               | ✅ Light/Dark | [GitHub](https://github.com/react-bootstrap/react-bootstrap)       |
| 36  | [React Spectrum](https://react-spectrum.adobe.com/)                                   | ✅ Light/Dark | [GitHub](https://github.com/adobe/react-spectrum)                  |
| 37  | [RSuite](https://rsuitejs.com/)                                                       | ✅ Light/Dark | [GitHub](https://github.com/rsuite/rsuite)                         |
| 38  | [Salesforce Lightning Design System](https://design-system-react-site.herokuapp.com/) | ⚠️ Light only | [GitHub](https://github.com/salesforce/design-system-react)        |
| 39  | [Semantic UI React](https://react.semantic-ui.com/)                                   | ✅ Light/Dark | [GitHub](https://github.com/Semantic-Org/Semantic-UI-React)        |
| 40  | [Semi Design](https://semi.design/)                                                   | ✅ Light/Dark | [GitHub](https://github.com/DouyinFE/semi-design)                  |
| 41  | [Shadcn/ui](https://ui.shadcn.com/)                                                   | ✅ Light/Dark | [GitHub](https://github.com/shadcn-ui/ui)                          |
| 42  | [Shopify Polaris](https://polaris.shopify.com/)                                       | ✅ Light/Dark | [GitHub](https://github.com/Shopify/polaris)                       |
| 43  | [Tamagui](https://tamagui.dev/)                                                       | ✅ Light/Dark | [GitHub](https://github.com/tamagui/tamagui)                       |
| 44  | [Theme UI](https://theme-ui.com/)                                                     | ✅ Light/Dark | [GitHub](https://github.com/system-ui/theme-ui)                    |
| 45  | [U.S. Web Design System](https://designsystem.digital.gov/)                           | ⚠️ Light only | [GitHub](https://github.com/uswds/uswds)                           |
| 46  | [Web Awesome](https://webawesome.com/)                                                | ✅ Light/Dark | [GitHub](https://github.com/AmazeeLabs/webawesome)                 |
| 47  | [Zendesk Garden](https://garden.zendesk.com/)                                         | ✅ Light/Dark | [GitHub](https://github.com/zendeskgarden/react-components)        |

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0 or higher) — Install with: `curl -fsSL https://bun.sh/install | bash`

> **Note:** This project uses Bun for faster dependency installation and build times. If you prefer Node.js, see the [Alternative: Using Node.js](#alternative-using-nodejs) section below.

### Installation

```bash
# Clone the repository
git clone https://github.com/evgenyvinnik/20forms-20designs.git
cd 20forms-20designs

# Install dependencies
bun install
```

### Development

```bash
# Run the shell app in development mode
bun run dev:shell
```

This runs the shell application in development mode.

### Production Build (CSS Isolation)

```bash
# Build all 49 apps (shell + 48 library apps) for GitHub Pages
bun run build

# Preview the production build locally
bun run preview
# Then open: http://localhost:3000/20forms-20designs/
```

The production build uses iframes for complete CSS isolation between libraries.

## 📦 Project Structure

### Shell App (`apps/shell/`)

The main comparison UI that:

- Displays a matrix of forms × libraries
- Renders each combination in an isolated `<iframe>`
- Provides theme switching (light/dark)
- Allows filtering by form and library

### Library Apps (`apps/<library>/`)

Each library app is a standalone Vite + React application that:

- Contains all 20 form implementations for that design system
- Supports form selection via URL query parameter (`?form=user-login`)
- Supports theme via URL query parameter (`?theme=dark`)
- Is completely isolated from other library apps

### Scripts

| Script                | Description                                   |
| --------------------- | --------------------------------------------- |
| `bun run build`       | Build shell + all library apps + copy to dist |
| `bun run build:shell` | Build only the shell app                      |
| `bun run clean`       | Remove all build artifacts                    |
| `bun run dev:shell`   | Run shell app in development mode             |
| `bun run preview`     | Preview the production build locally          |
| `bun run lint`        | Lint all apps (may take a while)              |

## 🧪 Testing

The shell app includes a comprehensive Playwright test suite to ensure UI functionality works correctly.

### Running Tests

```bash
cd apps/shell

# Run all tests headlessly
bunx playwright test

# Run tests with Playwright UI (interactive mode)
bunx playwright test --ui

# Run tests with browser visible
bunx playwright test --headed

# Run tests in debug mode
bunx playwright test --debug

# Run tests for a specific browser
bunx playwright test --project=chromium
bunx playwright test --project=firefox
bunx playwright test --project=webkit
```

### Test Coverage

The test suite covers:

- **Header** — Title and subtitle display
- **Form Selection** — Display, toggle, select all/none functionality
- **Library Selection** — Display, toggle, select all/none, external links
- **Theme Toggle** — Light/dark theme switching
- **Group By Toggle** — Grouping by design system or form name
- **Preview Section** — Cards, iframes, GitHub links, empty states
- **Grouping Behavior** — Different section layouts based on grouping mode
- **Persistence** — localStorage persistence across page reloads
- **Dark Theme Badge** — Warning for libraries without dark theme support
- **Responsive Layout** — Two-column and single-column layouts
- **External Links** — Correct attributes on website/repo links

## 🔧 Adding a New Library

1. Create a new directory: `apps/<library>/`
2. Implement all 20 forms in `src/forms/` following the pattern from existing libraries
3. Create the App.jsx with form routing via URL parameter
4. Update `apps/shell/src/config.ts` with the new library (add to LibraryId type, LIBRARY_NAME_TO_ID, LIBRARIES array, and CONSOLIDATED_LIBRARIES set)
5. Run `bun run build`

## 🔧 Adding a New Form

1. Add the new form component to each library's `src/forms/` directory
2. Update the form routing in each library's App.jsx
3. Update `apps/shell/src/config.ts` with the new form (add to FormId type, FORM_NAME_TO_ID, and FORMS array)
4. Run `bun run build`

## 🌐 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. **Push to `main` branch** — Triggers the deploy workflow automatically
2. **Manual trigger** — Go to Actions → "Deploy to GitHub Pages" → "Run workflow"

The workflow:

- Installs dependencies with Bun (with caching for faster builds)
- Builds all 49 apps (shell + 48 library apps)
- Deploys to GitHub Pages

**Live URL:** `https://<username>.github.io/20forms-20designs/`

### Manual Deployment

```bash
# Build for production
bun run build

# The dist/ folder contains all static assets
# Upload dist/ to any static hosting provider
```

### Base Path Configuration

The project is configured with `/20forms-20designs/` as the base path. If deploying to a different path:

1. Update `BASE_PATH` in `apps/shell/vite.config.ts`
2. Update `buildIframeSrc` in `apps/shell/src/config.ts`
3. Update base paths in `scripts/generate-mini-apps.mjs`

## 📝 Tech Stack

- **Bun** — Fast JavaScript runtime and package manager
- **Vite** — Fast build tool and dev server
- **React 18** — UI library
- **TypeScript** — Type-safe shell app
- **Bun Workspaces** — Fast, disk-efficient monorepo management
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — Static hosting

## 📊 Source Lines of Code (SLOC)

Total non-empty lines of code in the project:

| Extension | Lines      |
| --------- | ---------- |
| `.jsx`    | 71,636     |
| `.js`     | 7,425      |
| `.mjs`    | 2,495      |
| `.css`    | 1,739      |
| `.json`   | 1,562      |
| `.ts`     | 1,510      |
| `.html`   | 998        |
| `.md`     | 698        |
| `.tsx`    | 561        |
| `.cjs`    | 14         |
| `.scss`   | 7          |
| **Total** | **88,645** |

_Generated using `scripts/calc-sloc.mjs` — excludes `node_modules`, `dist`, lock files, and other build artifacts._

## 🔄 Alternative: Using Node.js

If you prefer to use Node.js with pnpm instead of Bun:

1. Install Node.js 18+ and pnpm 9+
2. Install dependencies: `pnpm install`
3. Build: `pnpm run build`
4. Dev server: `pnpm run dev:shell`

Note: You'll need to update the `package.json` scripts and build files to use `pnpm` and `node` commands instead of `bun`.

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
