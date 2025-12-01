import { useState } from 'react'
import {
  InputField,
  Button,
  Select,
  Stack,
  Heading,
} from '@kiwicom/orbit-components'

function BillingInfoForm() {
  const [formData, setFormData] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    billingAddress: '',
    country: '',
  })

  const handleChange = (name) => (e) => {
    const value = e.target ? e.target.value : e
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Billing info submitted:\n' + JSON.stringify(formData, null, 2))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <Heading type="title2">Billing Information</Heading>

        <InputField
          label="Name on card"
          type="text"
          value={formData.nameOnCard}
          onChange={handleChange('nameOnCard')}
          required
        />

        <InputField
          label="Card number"
          type="text"
          inputMode="numeric"
          maxLength={19}
          value={formData.cardNumber}
          onChange={handleChange('cardNumber')}
          required
        />

        <InputField
          label="Expiration date"
          type="text"
          placeholder="MM/YY"
          value={formData.expirationDate}
          onChange={handleChange('expirationDate')}
          required
        />

        <InputField
          label="Security code"
          type="text"
          inputMode="numeric"
          maxLength={4}
          value={formData.securityCode}
          onChange={handleChange('securityCode')}
          required
        />

        <InputField
          label="Billing address"
          type="text"
          value={formData.billingAddress}
          onChange={handleChange('billingAddress')}
          required
        />

        <Select
          label="Country"
          value={formData.country}
          onChange={handleChange('country')}
          options={[
            { label: 'Select country', value: '' },
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
          ]}
          required
        />

        <Button type="primary" submit fullWidth>
          Save billing details
        </Button>
      </Stack>
    </form>
  )
}

export default BillingInfoForm
