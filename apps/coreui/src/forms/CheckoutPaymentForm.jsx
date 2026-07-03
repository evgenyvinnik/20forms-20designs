import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      ></div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-checkout-promo">Promo code</CFormLabel>
        <CFormInput
          id="coreui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Place order
        </CButton>
      </div>
    </CForm>
  )
}

export default CheckoutPaymentForm
