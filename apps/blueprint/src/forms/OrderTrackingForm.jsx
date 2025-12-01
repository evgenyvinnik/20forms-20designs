import { Button, FormGroup, InputGroup } from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup
        label="Order number"
        labelFor="blueprint-order-tracking-number"
      >
        <InputGroup
          id="blueprint-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Email address"
        labelFor="blueprint-order-tracking-email"
      >
        <InputGroup
          id="blueprint-order-tracking-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Postal code" labelFor="blueprint-order-tracking-postal">
        <InputGroup
          id="blueprint-order-tracking-postal"
          name="postalCode"
          type="text"
          required
          fill
        />
      </FormGroup>
      <Button intent="primary" type="submit">
        Find order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
