import { useState } from 'react'
import { Checkbox, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <Checkbox
        isSelected={formData.marketing}
        onValueChange={(val) => setFormData({ ...formData, marketing: val })}
      >
        Receive marketing communication and special offers
      </Checkbox>
      <Checkbox
        isSelected={formData.analytics}
        onValueChange={(val) => setFormData({ ...formData, analytics: val })}
      >
        Allow anonymous performance and analytics tracking
      </Checkbox>
      <Checkbox
        isSelected={formData.thirdParty}
        onValueChange={(val) => setFormData({ ...formData, thirdParty: val })}
      >
        Share data with trusted third-party service partners
      </Checkbox>
      <Button type="submit" color="primary">
        Save Preferences
      </Button>
    </form>
  )
}
