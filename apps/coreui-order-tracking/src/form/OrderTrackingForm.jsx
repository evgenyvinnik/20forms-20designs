import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-order-tracking-number">
          Order number
        </CFormLabel>
        <CFormInput
          id="coreui-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-order-tracking-email">
          Email address
        </CFormLabel>
        <CFormInput
          id="coreui-order-tracking-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-order-tracking-postal">
          Postal code
        </CFormLabel>
        <CFormInput
          id="coreui-order-tracking-postal"
          name="postalCode"
          type="text"
          required
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Find order
        </CButton>
      </div>
    </CForm>
  )
}

export default OrderTrackingForm
