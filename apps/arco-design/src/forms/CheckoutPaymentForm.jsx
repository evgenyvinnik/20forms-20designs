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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
        ></div>
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
