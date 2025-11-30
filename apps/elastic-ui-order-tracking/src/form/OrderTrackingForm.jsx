import { useState, useCallback } from 'react'
import { EuiForm, EuiFormRow, EuiFieldText, EuiButton } from '@elastic/eui'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Order number">
        <EuiFieldText
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Postal code">
        <EuiFieldText
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Find order
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default OrderTrackingForm
