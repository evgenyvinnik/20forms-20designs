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

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-order-tracking-number"
          >
            Order number
          </label>
          <Input
            id="nocss-order-tracking-number"
            name="orderNumber"
            type="text"
            pattern="[A-Za-z0-9-]{6,20}"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-order-tracking-email"
          >
            Email address
          </label>
          <Input
            id="nocss-order-tracking-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-order-tracking-postal"
          >
            Postal code
          </label>
          <Input
            id="nocss-order-tracking-postal"
            name="postalCode"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <Button type="primary" htmlType="submit">
          Find order
        </Button>
      </Space>
    </form>
  )
}

export default OrderTrackingForm
