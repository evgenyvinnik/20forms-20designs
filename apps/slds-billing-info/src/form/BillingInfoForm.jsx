import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Button from '@salesforce/design-system-react/components/button'

const countryOptions = [
  { id: 'us', label: 'United States' },
  { id: 'ca', label: 'Canada' },
]

function BillingInfoForm({ theme }) {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-billing-cardname"
          label="Name on card"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-billing-cardnumber"
          label="Card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-billing-expiration"
          label="Expiration date"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-billing-cvc"
          label="Security code"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-billing-address"
          label="Billing address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Combobox
          id="slds-billing-country"
          labels={{ label: 'Country' }}
          options={countryOptions}
          selection={country}
          onSelect={(event, data) => setCountry(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element">
        <Button
          type="submit"
          variant="brand"
          label="Save billing details"
        />
      </div>
    </form>
  )
}

export default BillingInfoForm
