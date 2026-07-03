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

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-feedback-name"
          >
            Name
          </label>
          <Input
            id="nocss-feedback-name"
            name="name"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-feedback-email"
          >
            Email address
          </label>
          <Input
            id="nocss-feedback-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-feedback-rating"
          >
            Overall rating
          </label>
          <Select
            id="nocss-feedback-rating"
            name="rating"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="">Select rating</Select.Option>
            <Select.Option value="excellent">Excellent</Select.Option>
            <Select.Option value="good">Good</Select.Option>
            <Select.Option value="average">Average</Select.Option>
            <Select.Option value="poor">Poor</Select.Option>
          </Select>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-feedback-comments"
          >
            Comments
          </label>
          <Input.TextArea
            id="nocss-feedback-comments"
            name="comments"
            rows="4"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="followUp">I would like a follow-up</Checkbox>
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Send feedback
        </Button>
      </Space>
    </form>
  )
}

export default CustomerFeedbackForm
