# 20forms-20designs

> **Form Library Comparison Playground** — Compare the same forms implemented across different React design systems with full CSS isolation.

## Overview

This project showcases **20 common web forms** implemented using **8+ React component libraries**. Each form is rendered in a fully isolated iframe, preventing any CSS bleed between different design systems.

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

| Library | Theme Support | Status |
|---------|---------------|--------|
| [MUI](https://mui.com/) | ✅ Light/Dark | ✅ Implemented |
| [React Bootstrap](https://react-bootstrap.github.io/) | ✅ Light/Dark | ✅ Implemented |
| [Radix UI](https://www.radix-ui.com/) | ✅ Light/Dark | ✅ Implemented |
| [Blueprint](https://blueprintjs.com/) | ✅ Light/Dark | ✅ Implemented |
| [Gravity UI](https://gravity-ui.com/) | ✅ Light/Dark | ✅ Implemented |
| [Evergreen](https://evergreen.segment.com/) | ✅ Light/Dark | ✅ Implemented |
| [Cloudscape](https://cloudscape.design/) | ✅ Light/Dark | ✅ Implemented |
| [React + No CSS](https://react.dev/) | ✅ Light/Dark | ✅ Implemented |

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
# Run the original app (lazy-loaded components, no CSS isolation)
npm run dev
```

This runs the original single-page app with all forms lazy-loaded. Fast and convenient for development, but styles may bleed between libraries.

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
| `npm run dev` | Run shell app in development mode |

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

## 📝 Tech Stack

- **Vite** — Fast build tool and dev server
- **React 18** — UI library
- **TypeScript** — Type-safe shell app
- **npm Workspaces** — Monorepo management
- **GitHub Pages** — Static hosting

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
