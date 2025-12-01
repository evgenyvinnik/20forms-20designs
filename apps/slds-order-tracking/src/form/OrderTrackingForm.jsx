import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Button from '@salesforce/design-system-react/components/button'

function OrderTrackingForm({ theme }) {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-order-number"
          label="Order number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-order-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Input
          id="slds-order-postalcode"
          label="Postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Find order" />
      </div>
    </form>
  )
}

export default OrderTrackingForm
