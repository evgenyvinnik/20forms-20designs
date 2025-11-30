import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

function PrivacyConsentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)
  const [notes, setNotes] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-privacy-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Full name
        </label>
        <InputText
          id="primereact-privacy-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-privacy-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-privacy-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <fieldset
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <legend>Communication channels</legend>
        <div
          className="field"
          style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Checkbox
            inputId="primereact-privacy-email-opt"
            name="emailOptIn"
            checked={emailOptIn}
            onChange={(e) => setEmailOptIn(e.checked)}
          />
          <label htmlFor="primereact-privacy-email-opt">Email updates</label>
        </div>
        <div
          className="field"
          style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Checkbox
            inputId="primereact-privacy-sms-opt"
            name="smsOptIn"
            checked={smsOptIn}
            onChange={(e) => setSmsOptIn(e.checked)}
          />
          <label htmlFor="primereact-privacy-sms-opt">SMS notifications</label>
        </div>
        <div
          className="field"
          style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Checkbox
            inputId="primereact-privacy-phone-opt"
            name="phoneOptIn"
            checked={phoneOptIn}
            onChange={(e) => setPhoneOptIn(e.checked)}
          />
          <label htmlFor="primereact-privacy-phone-opt">Phone calls</label>
        </div>
      </fieldset>
      <fieldset
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <legend>Privacy options</legend>
        <div
          className="field"
          style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Checkbox
            inputId="primereact-privacy-analytics"
            name="analytics"
            checked={analytics}
            onChange={(e) => setAnalytics(e.checked)}
          />
          <label htmlFor="primereact-privacy-analytics">
            Allow analytics cookies
          </label>
        </div>
        <div
          className="field"
          style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Checkbox
            inputId="primereact-privacy-personalization"
            name="personalization"
            checked={personalization}
            onChange={(e) => setPersonalization(e.checked)}
          />
          <label htmlFor="primereact-privacy-personalization">
            Allow personalized content
          </label>
        </div>
      </fieldset>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-privacy-notes"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Additional notes
        </label>
        <InputTextarea
          id="primereact-privacy-notes"
          name="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <Button type="submit" label="Save preferences" />
    </form>
  )
}

export default PrivacyConsentForm
