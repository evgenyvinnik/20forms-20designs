import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd'

const { TextArea } = Input
const { Title } = Typography

function PrivacyConsentForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Privacy preferences saved!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Full name"
        name="fullName"
        rules={[{ required: true, message: 'Please enter your full name' }]}
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

      <Divider orientation="left">
        <Title level={5} style={{ margin: 0 }}>Communication channels</Title>
      </Divider>

      <Form.Item name="emailOptIn" valuePropName="checked">
        <Checkbox>Email updates</Checkbox>
      </Form.Item>

      <Form.Item name="smsOptIn" valuePropName="checked">
        <Checkbox>SMS notifications</Checkbox>
      </Form.Item>

      <Form.Item name="phoneOptIn" valuePropName="checked">
        <Checkbox>Phone calls</Checkbox>
      </Form.Item>

      <Divider orientation="left">
        <Title level={5} style={{ margin: 0 }}>Privacy options</Title>
      </Divider>

      <Form.Item name="analytics" valuePropName="checked">
        <Checkbox>Allow analytics cookies</Checkbox>
      </Form.Item>

      <Form.Item name="personalization" valuePropName="checked">
        <Checkbox>Allow personalized content</Checkbox>
      </Form.Item>

      <Form.Item label="Additional notes" name="notes">
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save preferences
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PrivacyConsentForm
