import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

const frequencyOptions = [
  { id: 'weekly', label: 'Weekly' },
  { id: 'monthly', label: 'Monthly' },
  { id: 'quarterly', label: 'Quarterly' },
]

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState([])
  const [agree, setAgree] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-newsletter-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-newsletter-frequency"
          labels={{ label: 'Frequency' }}
          options={frequencyOptions}
          selection={frequency}
          onSelect={(event, data) => setFrequency(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-newsletter-agree"
          labels={{ label: 'Receive product updates' }}
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Subscribe" />
      </div>
    </form>
  )
}

export default NewsletterSubscriptionForm
