import { useEffect, useRef } from 'react'
import {
  buildIframeSrc,
  LIBRARY_NAME_TO_ID,
  FORM_NAME_TO_ID,
  FormId,
} from '../config'
import { ThemeMode } from '../store'

const GITHUB_REPO_BASE = 'https://github.com/evgenyvinnik/20forms-20designs'

// Hardcoded heights per form type based on form complexity
// This eliminates the need for iframe-to-parent postMessage communication
const FORM_HEIGHTS: Record<FormId, number> = {
  // Short forms (simple, few fields)
  'password-reset': 350,
  'two-factor-auth': 350,
  'newsletter-subscription': 350,
  'order-tracking': 450,

  // Medium forms (moderate complexity)
  'user-login': 450,
  'contact-inquiry': 900,
  'profile-update': 600,
  'password-change': 500,
  'appointment-request': 700,
  'advanced-search': 700,

  // Standard forms (typical registration/checkout)
  'user-registration': 700,
  'billing-info': 700,
  'shipping-address': 750,
  'checkout-payment': 750,
  'event-registration': 700,
  'support-ticket': 650,

  // Long forms (many fields, complex layouts)
  'job-application': 900,
  'customer-feedback': 800,
  'privacy-consent': 800,

  // Extra tall forms (multi-step, wizards)
  'onboarding-wizard': 850,
}

// Default height if form is not in the map
const DEFAULT_FORM_HEIGHT = 600

interface PreviewCardProps {
  libraryName: string
  formName: string
  theme: ThemeMode
  supportsTheme: boolean
}

function buildGitHubUrl(libraryName: string, formName: string): string {
  const libId = LIBRARY_NAME_TO_ID[libraryName]
  const formId = FORM_NAME_TO_ID[formName]

  if (!libId || !formId) {
    return GITHUB_REPO_BASE
  }

  return `${GITHUB_REPO_BASE}/tree/main/apps/${libId}-${formId}`
}

function getFormHeight(formName: string): number {
  const formId = FORM_NAME_TO_ID[formName]
  if (formId && formId in FORM_HEIGHTS) {
    return FORM_HEIGHTS[formId]
  }
  return DEFAULT_FORM_HEIGHT
}

export function PreviewCard({
  libraryName,
  formName,
  theme,
  supportsTheme,
}: PreviewCardProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const iframeSrc = buildIframeSrc(libraryName, formName, theme)
  const githubUrl = buildGitHubUrl(libraryName, formName)

  // Use hardcoded height based on form type
  const iframeHeight = getFormHeight(formName)

  // Send theme updates to iframe when theme changes
  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'SET_THEME', theme },
        '*'
      )
    }
  }, [theme])

  if (!iframeSrc) {
    return null
  }

  // Handle iframe load - send theme to iframe when it loads
  const handleIframeLoad = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'SET_THEME', theme },
        '*'
      )
    }
  }

  return (
    <div className="preview-card">
      <div className="preview-card-header">
        <strong>{formName}</strong>{' '}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          title="View source code on GitHub"
        >
          {libraryName}
        </a>
        {!supportsTheme && theme === 'dark' && (
          <span
            className="no-dark-theme-badge"
            title="This library does not support dark theme"
          >
            ⚠️ Light only
          </span>
        )}
      </div>
      <iframe
        ref={iframeRef}
        title={`${libraryName}-${formName}`}
        src={iframeSrc}
        className="preview-iframe"
        style={{ height: `${iframeHeight}px` }}
        sandbox="allow-scripts allow-forms allow-same-origin"
        onLoad={handleIframeLoad}
      />
    </div>
  )
}
