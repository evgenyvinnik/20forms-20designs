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

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-billing-name"
          >
            Name on card
          </label>
          <Input
            id="nocss-billing-name"
            name="cardName"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-billing-card-number"
          >
            Card number
          </label>
          <Input
            id="nocss-billing-card-number"
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
            htmlFor="nocss-billing-expiration"
          >
            Expiration date
          </label>
          <Input
            id="nocss-billing-expiration"
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
            htmlFor="nocss-billing-cvc"
          >
            Security code
          </label>
          <Input
            id="nocss-billing-cvc"
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
            htmlFor="nocss-billing-address"
          >
            Billing address
          </label>
          <Input
            id="nocss-billing-address"
            name="address"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-billing-country"
          >
            Country
          </label>
          <Select
            id="nocss-billing-country"
            name="country"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="">Select country</Select.Option>
            <Select.Option value="US">United States</Select.Option>
            <Select.Option value="CA">Canada</Select.Option>
          </Select>
        </div>
        <Button type="primary" htmlType="submit">
          Save billing details
        </Button>
      </Space>
    </form>
  )
}

export default BillingInfoForm
