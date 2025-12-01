import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Container,
  FormField,
  Input,
  Select,
  SpaceBetween,
} from '@cloudscape-design/components'

function BillingInfoForm() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Name on card">
            <Input
              name="cardName"
              type="text"
              placeholder="Full name"
              required
            />
          </FormField>
          <FormField label="Card number">
            <Input
              name="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              inputMode="numeric"
              required
            />
          </FormField>
          <FormField label="Expiration date">
            <Input
              name="expiration"
              type="text"
              placeholder="MM/YY"
              inputMode="numeric"
              required
            />
          </FormField>
          <FormField label="Security code">
            <Input
              name="cvc"
              type="text"
              placeholder="CVC"
              inputMode="numeric"
              required
            />
          </FormField>
          <FormField label="Billing address">
            <Input
              name="address"
              type="text"
              placeholder="Street address"
              required
            />
          </FormField>
          <FormField label="Country">
            <Select
              name="country"
              placeholder="Select country"
              options={[
                { label: 'United States', value: 'US' },
                { label: 'Canada', value: 'CA' },
              ]}
              selectedOption={selectedCountry}
              onChange={({ detail }) =>
                setSelectedCountry(detail.selectedOption)
              }
            />
          </FormField>
          <Button variant="primary" formAction="submit">
            Save billing details
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default BillingInfoForm
