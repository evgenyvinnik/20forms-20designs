import { Button, Pane, TextInputField } from 'evergreen-ui'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Pane
      is="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={8}
    >
      <TextInputField
        id="evergreen-order-tracking-number"
        label="Order number"
        name="orderNumber"
        type="text"
        pattern="[A-Za-z0-9-]{6,20}"
        required
      />
      <TextInputField
        id="evergreen-order-tracking-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <TextInputField
        id="evergreen-order-tracking-postal"
        label="Postal code"
        name="postalCode"
        type="text"
        required
      />
      <Button appearance="primary" type="submit">
        Find order
      </Button>
    </Pane>
  )
}

export default OrderTrackingForm
