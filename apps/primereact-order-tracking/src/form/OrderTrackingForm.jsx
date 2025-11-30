import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-order-tracking-number"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Order number
        </label>
        <InputText
          id="primereact-order-tracking-number"
          name="orderNumber"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-order-tracking-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-order-tracking-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-order-tracking-postal"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Postal code
        </label>
        <InputText
          id="primereact-order-tracking-postal"
          name="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </div>
      <Button type="submit" label="Find order" />
    </form>
  )
}

export default OrderTrackingForm
