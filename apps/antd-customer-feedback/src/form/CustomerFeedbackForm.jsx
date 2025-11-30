import { Form, Input, Button, Select, Checkbox } from 'antd'

const { TextArea } = Input

function CustomerFeedbackForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Feedback submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email address"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Overall rating"
        name="rating"
        rules={[{ required: true, message: 'Please select a rating' }]}
      >
        <Select placeholder="Select rating">
          <Select.Option value="excellent">Excellent</Select.Option>
          <Select.Option value="good">Good</Select.Option>
          <Select.Option value="average">Average</Select.Option>
          <Select.Option value="poor">Poor</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Comments"
        name="comments"
        rules={[{ required: true, message: 'Please enter your comments' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item name="followUp" valuePropName="checked">
        <Checkbox>I would like a follow-up</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send feedback
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CustomerFeedbackForm
