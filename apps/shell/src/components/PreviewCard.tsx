import { useState, useEffect, useRef } from 'react'
import { buildIframeSrc, LIBRARY_NAME_TO_ID, FORM_NAME_TO_ID } from '../config'
import { ThemeMode } from '../store'

const GITHUB_REPO_BASE = 'https://github.com/evgenyvinnik/20forms-20designs'

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

export function PreviewCard({
  libraryName,
  formName,
  theme,
  supportsTheme,
}: PreviewCardProps) {
  const [iframeHeight, setIframeHeight] = useState(500)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const iframeSrc = buildIframeSrc(libraryName, formName, theme)
  const githubUrl = buildGitHubUrl(libraryName, formName)

  // Listen for height messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'IFRAME_HEIGHT') {
        // Check if this message is from our iframe
        if (
          iframeRef.current &&
          event.source === iframeRef.current.contentWindow
        ) {
          const height = event.data.height
          // Only accept reasonable heights (between 100 and 1200px)
          if (height > 100 && height < 1200) {
            setIframeHeight(height + 20) // Add some padding
          }
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

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

  // Handle iframe load and resize to fit content (fallback for same-origin)
  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const iframe = e.currentTarget
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (iframeDoc) {
        const height = iframeDoc.body.scrollHeight
        // Only accept reasonable heights (between 100 and 1200px)
        if (height > 100 && height < 1200) {
          setIframeHeight(height + 20)
        }
      }
    } catch {
      // Cross-origin restrictions - rely on postMessage instead
    }

    // Send theme to iframe when it loads
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
