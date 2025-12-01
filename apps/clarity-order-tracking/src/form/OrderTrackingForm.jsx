import { CdsInput, CdsButton, CdsFormGroup } from '@cds/react/forms'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking order!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Order number</label>
          <input
            id="clarity-order-number"
            name="orderNumber"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email address</label>
          <input id="clarity-order-email" name="email" type="email" required />
        </CdsInput>

        <CdsInput>
          <label>Billing ZIP/Postal code</label>
          <input
            id="clarity-order-postal-code"
            name="postalCode"
            type="text"
            required
          />
        </CdsInput>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Track order
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default OrderTrackingForm
