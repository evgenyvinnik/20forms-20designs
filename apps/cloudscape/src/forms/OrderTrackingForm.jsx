import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Container,
  FormField,
  Input,
  SpaceBetween,
} from '@cloudscape-design/components'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Order number">
            <Input
              name="orderNumber"
              type="text"
              placeholder="ORD-123456"
              required
            />
          </FormField>
          <FormField label="Email address">
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </FormField>
          <FormField label="Postal code">
            <Input
              name="postalCode"
              type="text"
              placeholder="Postal code"
              required
            />
          </FormField>
          <Button variant="primary" formAction="submit">
            Find order
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default OrderTrackingForm
