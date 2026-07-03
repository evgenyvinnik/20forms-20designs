import { useState } from 'react'

export default function PrivacyConsentForm() {
  const [formData, setFormData] = useState({
    marketing: false,
    analytics: true,
    thirdParty: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Privacy & Cookies Consent
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          Privacy preferences saved!
        </div>
      )}
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          checked={formData.marketing}
          onChange={(e) =>
            setFormData({ ...formData, marketing: e.target.checked })
          }
        />
        Receive marketing communication and special offers
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          checked={formData.analytics}
          onChange={(e) =>
            setFormData({ ...formData, analytics: e.target.checked })
          }
        />
        Allow anonymous performance and analytics tracking
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          checked={formData.thirdParty}
          onChange={(e) =>
            setFormData({ ...formData, thirdParty: e.target.checked })
          }
        />
        Share data with trusted third-party service partners
      </label>
      <button type="submit" className="park-button">
        Save Preferences
      </button>
    </form>
  )
}
