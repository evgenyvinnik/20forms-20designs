import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  ChoiceList,
  Checkbox,
  Button,
  Text,
} from '@shopify/polaris'

function CheckoutPaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState(['credit'])
  const [cardholderName, setCardholderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [billingAddress, setBillingAddress] = useState('')
  const [savePayment, setSavePayment] = useState(false)

  const paymentOptions = [
    { label: 'Credit card', value: 'credit' },
    { label: 'Debit card', value: 'debit' },
    { label: 'PayPal', value: 'paypal' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Payment processed!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <ChoiceList
          title="Payment method"
          choices={paymentOptions}
          selected={paymentMethod}
          onChange={setPaymentMethod}
        />
        {(paymentMethod[0] === 'credit' || paymentMethod[0] === 'debit') && (
          <>
            <TextField
              label="Cardholder name"
              type="text"
              value={cardholderName}
              onChange={setCardholderName}
              autoComplete="cc-name"
              requiredIndicator
            />
            <TextField
              label="Card number"
              type="text"
              value={cardNumber}
              onChange={setCardNumber}
              autoComplete="cc-number"
              requiredIndicator
            />
            <FormLayout.Group>
              <TextField
                label="Expiry date"
                type="text"
                value={expiryDate}
                onChange={setExpiryDate}
                autoComplete="cc-exp"
                placeholder="MM/YY"
                requiredIndicator
              />
              <TextField
                label="CVV"
                type="text"
                value={cvv}
                onChange={setCvv}
                autoComplete="cc-csc"
                requiredIndicator
              />
            </FormLayout.Group>
          </>
        )}
        {paymentMethod[0] === 'paypal' && (
          <Text as="p">
            You will be redirected to PayPal to complete your purchase.
          </Text>
        )}
        <TextField
          label="Billing address"
          type="text"
          value={billingAddress}
          onChange={setBillingAddress}
          autoComplete="street-address"
          requiredIndicator
        />
        <Checkbox
          label="Save payment method for future purchases"
          checked={savePayment}
          onChange={setSavePayment}
        />
        <Button submit variant="primary">
          Complete purchase
        </Button>
      </FormLayout>
    </form>
  )
}

export default CheckoutPaymentForm
