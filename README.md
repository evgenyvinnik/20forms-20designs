# 20forms-20designs

> **Form Library Comparison Playground** — Compare the same forms implemented across different React design systems with full CSS isolation.

## Overview

This is project that I wanted to implement for quite some time. So far in my professional experience I have worked with a lot of various design systems and I was always fascinated how the same form could look so much differently using different component library.

This is how this project was born. It represents 20 extremely common forms that were built using 20+ popular React design systems. Each form is rendered in a fully isolated iframe, preventing any CSS bleed between different design systems.

**[Live Demo →](https://evgenyvinnik.github.io/20forms-20designs/)**

## ✨ Features

- **160 Mini-Apps** — Each form × library combination runs in its own isolated context
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
│   └── ... (160 mini-apps total)
├── packages/
│   └── shared/                   # Shared types and utilities
├── scripts/
│   ├── generate-mini-apps.mjs    # Mini-app generator
│   ├── build-all.mjs             # Build orchestration
│   └── copy-builds-to-dist.mjs   # Deployment bundler
└── src/
    └── component-libraries/      # Original form implementations
```

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

| Library | Theme Support | Repository |
|---------|---------------|------------|
| [Blueprint](https://blueprintjs.com/) | ✅ Light/Dark | [GitHub](https://github.com/palantir/blueprint) |
| [Cloudscape](https://cloudscape.design/) | ✅ Light/Dark | [GitHub](https://github.com/cloudscape-design/components) |
| [Evergreen](https://evergreen.segment.com/) | ⚠️ Light only | [GitHub](https://github.com/segmentio/evergreen) |
| [Gravity UI](https://gravity-ui.com/) | ✅ Light/Dark | [GitHub](https://github.com/gravity-ui/uikit) |
| [MUI](https://mui.com/) | ✅ Light/Dark | [GitHub](https://github.com/mui/material-ui) |
| [Radix UI](https://www.radix-ui.com/) | ✅ Light/Dark | [GitHub](https://github.com/radix-ui/primitives) |
| [React Bootstrap](https://react-bootstrap.netlify.app/) | ✅ Light/Dark | [GitHub](https://github.com/react-bootstrap/react-bootstrap) |
| [React (No CSS)](https://react.dev/) | ✅ Light/Dark | [GitHub](https://github.com/facebook/react) |

### 📋 Planned Libraries

| Library | Repository |
|---------|------------|
| [Ant Design](https://ant.design/) | [GitHub](https://github.com/ant-design/ant-design) |
| [Arco Design](https://arco.design/) | [GitHub](https://github.com/arco-design/arco-design) |
| [Ariakit](https://ariakit.org/) | [GitHub](https://github.com/ariakit/ariakit) |
| [Atlassian Atlaskit](https://atlassian.design/components) | [Bitbucket](https://bitbucket.org/atlassian/atlassian-frontend/) |
| [Base Web](https://baseweb.design/) | [GitHub](https://github.com/uber/baseweb) |
| [Braid Design System](https://seek-oss.github.io/braid-design-system/) | [GitHub](https://github.com/seek-oss/braid-design-system) |
| [Carbon Design System](https://carbondesignsystem.com/) | [GitHub](https://github.com/carbon-design-system/carbon) |
| [Chakra UI](https://chakra-ui.com/) | [GitHub](https://github.com/chakra-ui/chakra-ui) |
| [CoreUI](https://coreui.io/react/) | [GitHub](https://github.com/coreui/coreui-react) |
| [daisyUI](https://daisyui.com/) | [GitHub](https://github.com/saadeghi/daisyui) |
| [Drip UI](https://drip-ui.com/) | [GitHub](https://github.com/drip-ui/drip-ui) |
| [Elastic UI (EUI)](https://eui.elastic.co/) | [GitHub](https://github.com/elastic/eui) |
| [Emotion](https://emotion.sh/) | [GitHub](https://github.com/emotion-js/emotion) |
| [FAST Design](https://www.fast.design/) | [GitHub](https://github.com/microsoft/fast) |
| [Flowbite React](https://flowbite-react.com/) | [GitHub](https://github.com/themesberg/flowbite-react) |
| [Fluent UI](https://developer.microsoft.com/en-us/fluentui) | [GitHub](https://github.com/microsoft/fluentui) |
| [Framer Motion](https://www.framer.com/motion/) | [GitHub](https://github.com/framer/motion) |
| [Geist UI](https://geist-ui.dev/) | [GitHub](https://github.com/geist-org/geist-ui) |
| [Gluestack UI](https://gluestack.io/ui/docs) | [GitHub](https://github.com/gluestack/gluestack-ui) |
| [Grommet](https://v2.grommet.io/) | [GitHub](https://github.com/grommet/grommet) |
| [Headless UI](https://headlessui.com/) | [GitHub](https://github.com/tailwindlabs/headlessui) |
| [HeroUI](https://heroui.com/) | [GitHub](https://github.com/heroui-inc/heroui) |
| [Ionic React](https://ionicframework.com/docs/react) | [GitHub](https://github.com/ionic-team/ionic-framework) |
| [Keep React](https://keep-react.vercel.app/) | [GitHub](https://github.com/Atticus-M/keep-react) |
| [KendoReact](https://www.telerik.com/kendo-react-ui/) | [GitHub](https://github.com/telerik/kendo-react) |
| [Mantine](https://mantine.dev/) | [GitHub](https://github.com/mantinedev/mantine) |
| [Material Tailwind](https://www.material-tailwind.com/) | [GitHub](https://github.com/creativetimofficial/material-tailwind) |
| [NextUI](https://nextui.org/) | [GitHub](https://github.com/nextui-org/nextui) |
| [Nivo](https://nivo.rocks/) | [GitHub](https://github.com/plouc/nivo) |
| [Onsen UI](https://onsen.io/react/) | [GitHub](https://github.com/OnsenUI/OnsenUI) |
| [Orbit by Kiwi.com](https://orbit.kiwi/) | [GitHub](https://github.com/kiwicom/orbit-components) |
| [PatternFly](https://www.patternfly.org/) | [GitHub](https://github.com/patternfly/patternfly-react) |
| [Pinterest Gestalt](https://gestalt.pinterest.systems/) | [GitHub](https://github.com/pinterest/gestalt) |
| [Primer React](https://primer.style/react/) | [GitHub](https://github.com/primer/react) |
| [PrimeReact](https://primereact.org/) | [GitHub](https://github.com/primefaces/primereact) |
| [React Admin](https://marmelab.com/react-admin/) | [GitHub](https://github.com/marmelab/react-admin) |
| [React Aria / React Stately](https://react-spectrum.adobe.com/react-aria/) | [GitHub](https://github.com/adobe/react-spectrum) |
| [React Flow](https://reactflow.dev/) | [GitHub](https://github.com/xyflow/react-flow) |
| [React Hook Form](https://react-hook-form.com/) | [GitHub](https://github.com/react-hook-form/react-hook-form) |
| [React Icons](https://react-icons.github.io/react-icons/) | [GitHub](https://github.com/react-icons/react-icons) |
| [React Spectrum](https://react-spectrum.adobe.com/) | [GitHub](https://github.com/adobe/react-spectrum) |
| [React Spring](https://www.react-spring.dev/) | [GitHub](https://github.com/pmndrs/react-spring) |
| [React Table (TanStack Table)](https://tanstack.com/table/) | [GitHub](https://github.com/TanStack/table) |
| [React Virtualized](https://www.npmjs.com/package/react-virtualized) | [GitHub](https://github.com/bvaughn/react-virtualized) |
| [React-Select](https://react-select.com/) | [GitHub](https://github.com/JedWatson/react-select) |
| [Rebass](https://rebassjs.org/) | [GitHub](https://github.com/rebassjs/rebass) |
| [Recharts](https://recharts.org/) | [GitHub](https://github.com/recharts/recharts) |
| [Refine](https://refine.dev/) | [GitHub](https://github.com/refinedev/refine) |
| [RSuite](https://rsuitejs.com/) | [GitHub](https://github.com/rsuite/rsuite) |
| [Salesforce Lightning Design System React](https://react.lightningdesignsystem.com/) | [GitHub](https://github.com/salesforce/design-system-react) |
| [Semantic UI React](https://react.semantic-ui.com/) | [GitHub](https://github.com/Semantic-Org/Semantic-UI-React) |
| [Semi Design](https://semi.design/) | [GitHub](https://github.com/DouyinFE/semi-design) |
| [shadcn/ui](https://ui.shadcn.com/) | [GitHub](https://github.com/shadcn-ui/ui) |
| [Shoelace](https://shoelace.style/) | [GitHub](https://github.com/shoelace-style/shoelace) |
| [Shopify Polaris](https://polaris.shopify.com/) | [GitHub](https://github.com/Shopify/polaris) |
| [Storybook](https://storybook.js.org/) | [GitHub](https://github.com/storybookjs/storybook) |
| [Styled Components](https://styled-components.com/) | [GitHub](https://github.com/styled-components/styled-components) |
| [Tamagui](https://tamagui.dev/) | [GitHub](https://github.com/tamagui/tamagui) |
| [Theme UI](https://theme-ui.com/) | [GitHub](https://github.com/system-ui/theme-ui) |
| [Tremor](https://www.tremor.so/) | [GitHub](https://github.com/tremorlabs/tremor) |
| [U.S. Web Design System](https://designsystem.digital.gov/) | [GitHub](https://github.com/uswds/uswds) |
| [VisX](https://airbnb.io/visx/) | [GitHub](https://github.com/airbnb/visx) |
| [VMware Clarity](https://clarity.design/) | [GitHub](https://github.com/vmware/clarity) |
| [Zendesk Garden](https://garden.zendesk.com/) | [GitHub](https://github.com/zendeskgarden/react-components) |

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
# Build all 161 apps (shell + 160 mini-apps) for GitHub Pages
npm run build

# Preview the production build locally
npm run preview
# Then open: http://localhost:5000/20forms-20designs/
```

The production build uses iframes for complete CSS isolation between libraries.

### Regenerating Mini-Apps

If you modify form components in `src/component-libraries/`, regenerate the mini-apps:

```bash
npm run generate
npm run build
```

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

| Script | Description |
|--------|-------------|
| `npm run generate` | Generate all 160 mini-apps from source components |
| `npm run build` | Build shell + all mini-apps + copy to dist |
| `npm run build:shell` | Build only the shell app |
| `npm run clean` | Remove all build artifacts |
| `npm run dev:shell` | Run shell app in development mode |
| `npm run preview` | Preview the production build locally |

## 🔧 Adding a New Library

1. Implement all 20 forms in `src/component-libraries/<library-name>/`
2. Update `scripts/generate-mini-apps.mjs` with the library configuration
3. Run `npm run generate` to create mini-apps
4. Update `apps/shell/src/config.ts` with the new library
5. Run `npm run build`

## 🔧 Adding a New Form

1. Create the form component in each library's directory
2. Update the FORMS array in `scripts/generate-mini-apps.mjs`
3. Run `npm run generate`
4. Update `apps/shell/src/config.ts` with the new form
5. Run `npm run build`

## 🌐 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. **Push to `main` branch** — Triggers the deploy workflow automatically
2. **Manual trigger** — Go to Actions → "Deploy to GitHub Pages" → "Run workflow"

The workflow:
- Installs dependencies with `--legacy-peer-deps`
- Generates mini-apps if they don't exist
- Builds all 161 apps (shell + 160 mini-apps)
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
