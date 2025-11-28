import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Container,
  FormField,
  Input,
  Select,
  SpaceBetween,
} from '@cloudscape-design/components'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Email for receipt">
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </FormField>
          <FormField label="Shipping method">
            <Select
              name="shippingMethod"
              placeholder="Select shipping"
              options={[
                { label: 'Standard', value: 'standard' },
                { label: 'Express', value: 'express' },
                { label: 'Overnight', value: 'overnight' },
              ]}
              selectedOption={null}
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
              placeholder="123"
              inputMode="numeric"
              required
            />
          </FormField>
          <FormField label="Promo code">
            <Input name="promoCode" type="text" placeholder="Enter code" />
          </FormField>
          <Button variant="primary" formAction="submit">
            Place order
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default CheckoutPaymentForm
