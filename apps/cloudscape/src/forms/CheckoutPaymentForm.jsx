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

function CheckoutPaymentForm() {
  const [selectedShipping, setSelectedShipping] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <FormField label="Email for receipt">
          <Input
            name="email"
            type="email"

            required
          />
        </FormField>
        <FormField label="Shipping method">
          <Select
            name="shippingMethod"

            options={[
              { label: 'Standard Shipping', value: 'standard' },
              { label: 'Express Shipping', value: 'express' },
              { label: 'Overnight Delivery', value: 'overnight' },
            ]}
            selectedOption={selectedShipping}
            onChange={({ detail }) =>
              setSelectedShipping(detail.selectedOption)
            }
          />
        </FormField>
        <FormField label="Card number">
          <Input
            name="cardNumber"
            type="text"

            inputMode="numeric"
            required
          />
        </FormField>
        <FormField label="Expiration">
          <Input
            name="expiration"
            type="text"
            placeholder="MM/YY"
            inputMode="numeric"
            required
          />
        </FormField>
        <FormField label="CVC">
          <Input
            name="cvc"
            type="text"

            inputMode="numeric"
            required
          />
        </FormField>
        <FormField label="Promo code">
          <Input name="promoCode" type="text" />
        </FormField>
        <Button variant="primary" formAction="submit">
          Place order
        </Button>
      </SpaceBetween>
    </form>
  )
}

export default CheckoutPaymentForm
