import { useState } from 'react'
import {
  Input,
  Button,
  Select,
  Option,
  Typography,
} from '@material-tailwind/react'

function CheckoutPaymentForm() {
  const [shippingMethod, setShippingMethod] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order placed!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Email for receipt
        </Typography>
        <Input
          id="material-tailwind-checkout-payment-email"
          name="email"
          type="email"
          required
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Shipping method
        </Typography>
        <Select
          id="material-tailwind-checkout-payment-shippingMethod"
          value={shippingMethod}
          onChange={(val) => setShippingMethod(val)}
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        >
          <Option value="standard">Standard</Option>
          <Option value="express">Express</Option>
          <Option value="overnight">Overnight</Option>
        </Select>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Card number
        </Typography>
        <Input
          id="material-tailwind-checkout-payment-cardNumber"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Typography
            variant="small"
            className="mb-1 font-medium text-gray-900 dark:text-white"
          >
            Expiration
          </Typography>
          <Input
            id="material-tailwind-checkout-payment-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            inputMode="numeric"
            required
            size="lg"
            className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
            labelProps={{ className: 'hidden' }}
            containerProps={{ className: 'min-w-0' }}
          />
        </div>
        <div>
          <Typography
            variant="small"
            className="mb-1 font-medium text-gray-900 dark:text-white"
          >
            CVC
          </Typography>
          <Input
            id="material-tailwind-checkout-payment-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength={4}
            required
            size="lg"
            className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
            labelProps={{ className: 'hidden' }}
            containerProps={{ className: 'min-w-0' }}
          />
        </div>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Promo code
        </Typography>
        <Input
          id="material-tailwind-checkout-payment-promoCode"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <Button type="submit" className="mt-2" fullWidth>
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
