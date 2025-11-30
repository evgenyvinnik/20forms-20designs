import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

const frequencyOptions = [
  { label: 'Select frequency', value: '' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
]

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-newsletter-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-newsletter-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-newsletter-frequency"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Frequency
        </label>
        <Dropdown
          id="primereact-newsletter-frequency"
          name="frequency"
          value={frequency}
          options={frequencyOptions}
          onChange={(e) => setFrequency(e.value)}
          placeholder="Select frequency"
          required
        />
      </div>
      <div
        className="field-checkbox"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-newsletter-agree"
          name="agree"
          checked={agree}
          onChange={(e) => setAgree(e.checked)}
        />
        <label htmlFor="primereact-newsletter-agree">
          Receive product updates
        </label>
      </div>
      <Button type="submit" label="Subscribe" />
    </form>
  )
}

export default NewsletterSubscriptionForm
