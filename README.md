# 20forms-20designs

> **Form Library Comparison Playground** — Compare the same forms implemented across different React design systems with full CSS isolation.

## Overview

This is project that I wanted to implement for quite some time. So far in my professional experience I have worked with a lot of various design systems and I was always fascinated how the same form could look so much differently using different component library.

This is how this project was born. It represents 20 extremely common forms that were built using 20+ popular React design systems. Each form is rendered in a fully isolated iframe, preventing any CSS bleed between different design systems.

**[Live Demo →](https://evgenyvinnik.github.io/20forms-20designs/)**

## ✨ Features

- **440+ Mini-Apps** — Each form × library combination runs in its own isolated context
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
│   ├── mui-user-login/           # MUI Login Form
│   ├── mui-user-registration/    # MUI Registration Form
│   ├── radix-ui-user-login/      # Radix UI Login Form
│   └── ... (440+ mini-apps total)
├── scripts/
│   ├── build-all.mjs             # Build orchestration
│   └── copy-builds-to-dist.mjs   # Deployment bundler
└── public/                       # Static assets
```

### Why 440+ Separate Mini-Apps?

You might wonder: *why build 460+ separate applications instead of one unified app?* The answer comes down to **CSS isolation** — the core technical challenge of this project.

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

Yes, building 440+ separate apps means:
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

| Library                                                 | Theme Support | Repository                                                        |
| ------------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| [Ant Design](https://ant.design/)                       | ✅ Light/Dark | [GitHub](https://github.com/ant-design/ant-design)                |
| [Blueprint](https://blueprintjs.com/)                   | ✅ Light/Dark | [GitHub](https://github.com/palantir/blueprint)                   |
| [Chakra UI](https://chakra-ui.com/)                     | ✅ Light/Dark | [GitHub](https://github.com/chakra-ui/chakra-ui)                  |
| [Cloudscape](https://cloudscape.design/)                | ✅ Light/Dark | [GitHub](https://github.com/cloudscape-design/components)         |
| [daisyUI](https://daisyui.com/)                         | ✅ Light/Dark | [GitHub](https://github.com/saadeghi/daisyui)                     |
| [Elastic UI (EUI)](https://eui.elastic.co/)             | ✅ Light/Dark | [GitHub](https://github.com/elastic/eui)                          |
| [Evergreen](https://evergreen.segment.com/)             | ⚠️ Light only | [GitHub](https://github.com/segmentio/evergreen)                  |
| [Geist UI](https://geist-ui.dev/)                       | ✅ Light/Dark | [GitHub](https://github.com/geist-org/geist-ui)                   |
| [Gravity UI](https://gravity-ui.com/)                   | ✅ Light/Dark | [GitHub](https://github.com/gravity-ui/uikit)                     |
| [HeroUI](https://heroui.com/)                           | ✅ Light/Dark | [GitHub](https://github.com/heroui-inc/heroui)                    |
| [MUI](https://mui.com/)                                 | ✅ Light/Dark | [GitHub](https://github.com/mui/material-ui)                      |
| [Pinterest Gestalt](https://gestalt.pinterest.systems/) | ✅ Light/Dark | [GitHub](https://github.com/pinterest/gestalt)                    |
| [PrimeReact](https://primereact.org/)                   | ✅ Light/Dark | [GitHub](https://github.com/primefaces/primereact)                |
| [Radix UI](https://www.radix-ui.com/)                   | ✅ Light/Dark | [GitHub](https://github.com/radix-ui/primitives)                  |
| [React Bootstrap](https://react-bootstrap.netlify.app/) | ✅ Light/Dark | [GitHub](https://github.com/react-bootstrap/react-bootstrap)      |
| [React (No CSS)](https://react.dev/)                    | ✅ Light/Dark | [GitHub](https://github.com/facebook/react) — *Reference implementation* |
| [shadcn/ui](https://ui.shadcn.com/)                     | ✅ Light/Dark | [GitHub](https://github.com/shadcn-ui/ui)                         |
| [Shopify Polaris](https://polaris.shopify.com/)         | ✅ Light/Dark | [GitHub](https://github.com/Shopify/polaris)                      |
| [Tamagui](https://tamagui.dev/)                         | ✅ Light/Dark | [GitHub](https://github.com/tamagui/tamagui)                      |
| [U.S. Web Design System](https://designsystem.digital.gov/) | ✅ Light/Dark | [GitHub](https://github.com/uswds/uswds)                      |
| [Web Awesome](https://webawesome.com/)                  | ✅ Light/Dark | [GitHub](https://github.com/AmazeeLabs/webawesome)                |
| [Zendesk Garden](https://garden.zendesk.com/)           | ✅ Light/Dark | [GitHub](https://github.com/zendeskgarden/react-components)       |

### 📋 Planned Libraries

| Library                                                                              | Repository                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [Arco Design](https://arco.design/)                                                  | [GitHub](https://github.com/arco-design/arco-design)               |
| [Ariakit](https://ariakit.org/)                                                      | [GitHub](https://github.com/ariakit/ariakit)                       |
| [Atlassian Atlaskit](https://atlassian.design/components)                            | [Bitbucket](https://bitbucket.org/atlassian/atlassian-frontend/)   |
| [Base Web](https://baseweb.design/)                                                  | [GitHub](https://github.com/uber/baseweb)                          |
| [Braid Design System](https://seek-oss.github.io/braid-design-system/)               | [GitHub](https://github.com/seek-oss/braid-design-system)          |
| [Carbon Design System](https://carbondesignsystem.com/)                              | [GitHub](https://github.com/carbon-design-system/carbon)           |
| [CoreUI](https://coreui.io/react/)                                                   | [GitHub](https://github.com/coreui/coreui-react)                   |
| [Flowbite React](https://flowbite-react.com/)                                        | [GitHub](https://github.com/themesberg/flowbite-react)             |
| [Fluent UI](https://developer.microsoft.com/en-us/fluentui)                          | [GitHub](https://github.com/microsoft/fluentui)                    |
| [Gluestack UI](https://gluestack.io/ui/docs)                                         | [GitHub](https://github.com/gluestack/gluestack-ui)                |
| [Grommet](https://v2.grommet.io/)                                                    | [GitHub](https://github.com/grommet/grommet)                       |
| [Headless UI](https://headlessui.com/)                                               | [GitHub](https://github.com/tailwindlabs/headlessui)               |
| [Mantine](https://mantine.dev/)                                                      | [GitHub](https://github.com/mantinedev/mantine)                    |
| [Material Tailwind](https://www.material-tailwind.com/)                              | [GitHub](https://github.com/creativetimofficial/material-tailwind) |
| [Orbit by Kiwi.com](https://orbit.kiwi/)                                             | [GitHub](https://github.com/kiwicom/orbit-components)              |
| [PatternFly](https://www.patternfly.org/)                                            | [GitHub](https://github.com/patternfly/patternfly-react)           |
| [Primer React](https://primer.style/react/)                                          | [GitHub](https://github.com/primer/react)                          |
| [React Spectrum](https://react-spectrum.adobe.com/)                                  | [GitHub](https://github.com/adobe/react-spectrum)                  |
| [RSuite](https://rsuitejs.com/)                                                      | [GitHub](https://github.com/rsuite/rsuite)                         |
| [Salesforce Lightning Design System React](https://design-system-react-site.herokuapp.com/) | [GitHub](https://github.com/salesforce/design-system-react)        |
| [Semantic UI React](https://react.semantic-ui.com/)                                  | [GitHub](https://github.com/Semantic-Org/Semantic-UI-React)        |
| [Semi Design](https://semi.design/)                                                  | [GitHub](https://github.com/DouyinFE/semi-design)                  |
| [Theme UI](https://theme-ui.com/)                                                    | [GitHub](https://github.com/system-ui/theme-ui)                    |
| [VMware Clarity](https://clarity.design/)                                            | [GitHub](https://github.com/vmware/clarity)                        |

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/evgenyvinnik/20forms-20designs.git
cd 20forms-20designs

# Install dependencies (use --legacy-peer-deps due to conflicting peer dependencies)
npm install --legacy-peer-deps
```

### Development

```bash
# Run the shell app in development mode
npm run dev:shell
```

This runs the shell application in development mode.

### Production Build (CSS Isolation)

```bash
# Build all 441 apps (shell + 440 mini-apps) for GitHub Pages
npm run build

# Preview the production build locally
npm run preview
# Then open: http://localhost:5000/20forms-20designs/
```

The production build uses iframes for complete CSS isolation between libraries.

## 📦 Project Structure

### Shell App (`apps/shell/`)

The main comparison UI that:

- Displays a matrix of forms × libraries
- Renders each combination in an isolated `<iframe>`
- Provides theme switching (light/dark)
- Allows filtering by form and library

### Mini-Apps (`apps/<library>-<form>/`)

Each mini-app is a standalone Vite + React application that:

- Renders exactly one form using one design system
- Supports theme via URL query parameter (`?theme=dark`)
- Is completely isolated from other mini-apps

### Scripts

| Script                      | Description                                       |
| --------------------------- | ------------------------------------------------- |
| `npm run build`             | Build shell + all mini-apps + copy to dist        |
| `npm run build:shell`       | Build only the shell app                          |
| `npm run clean`             | Remove all build artifacts                        |
| `npm run dev:shell`         | Run shell app in development mode                 |
| `npm run preview`           | Preview the production build locally              |
| `npm run lint`              | Lint all apps (may take a while)                  |

## 🔧 Adding a New Library

1. Create a new directory for each form: `apps/<library>-<form>/`
2. Implement all 20 forms following the pattern from existing libraries
3. Update `apps/shell/src/config.ts` with the new library (add to LibraryId type, LIBRARY_NAME_TO_ID, and LIBRARIES array)
4. Run `npm run build`

## 🔧 Adding a New Form

1. Create the form in each library's directory: `apps/<library>-<new-form>/`
2. Follow the pattern from existing forms in each library
3. Update `apps/shell/src/config.ts` with the new form (add to FormId type, FORM_NAME_TO_ID, and FORMS array)
4. Run `npm run build`

## 🌐 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. **Push to `main` branch** — Triggers the deploy workflow automatically
2. **Manual trigger** — Go to Actions → "Deploy to GitHub Pages" → "Run workflow"

The workflow:

- Installs dependencies with `--legacy-peer-deps`
- Builds all 441 apps (shell + 440 mini-apps)
- Deploys to GitHub Pages

**Live URL:** `https://<username>.github.io/20forms-20designs/`

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains all static assets
# Upload dist/ to any static hosting provider
```

### Base Path Configuration

The project is configured with `/20forms-20designs/` as the base path. If deploying to a different path:

1. Update `BASE_PATH` in `apps/shell/vite.config.ts`
2. Update `buildIframeSrc` in `apps/shell/src/config.ts`
3. Update base paths in `scripts/generate-mini-apps.mjs`

## 📝 Tech Stack

- **Vite** — Fast build tool and dev server
- **React 18** — UI library
- **TypeScript** — Type-safe shell app
- **npm Workspaces** — Monorepo management
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — Static hosting

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
