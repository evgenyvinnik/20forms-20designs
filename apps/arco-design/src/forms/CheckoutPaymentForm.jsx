import {
  Button,
  Input,
  Checkbox,
  Select,
  DatePicker,
  Radio,
  InputNumber,
  TimePicker,
  Switch,
  Form,
  Space,
} from '@arco-design/web-react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-checkout-email"
          >
            Email for receipt
          </label>
          <Input
            id="nocss-checkout-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-checkout-shipping-method"
          >
            Shipping method
          </label>
          <Select
            id="nocss-checkout-shipping-method"
            name="shippingMethod"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="">Select shipping</Select.Option>
            <Select.Option value="standard">Standard</Select.Option>
            <Select.Option value="express">Express</Select.Option>
            <Select.Option value="overnight">Overnight</Select.Option>
          </Select>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-checkout-card-number"
          >
            Card number
          </label>
          <Input
            id="nocss-checkout-card-number"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{13,19}"
            maxLength="19"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-checkout-expiration"
          >
            Expiration
          </label>
          <Input
            id="nocss-checkout-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
            inputMode="numeric"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-checkout-cvc"
          >
            CVC
          </label>
          <Input
            id="nocss-checkout-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength="4"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-checkout-promo"
          >
            Promo code
          </label>
          <Input
            id="nocss-checkout-promo"
            name="promoCode"
            type="text"
            pattern="[A-Za-z0-9]{3,15}"
            style={{ width: '100%' }}
          />
        </div>
        <Button type="primary" htmlType="submit">
          Place order
        </Button>
      </Space>
    </form>
  )
}

export default CheckoutPaymentForm
