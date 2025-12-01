import { Form, Button, Typography, Divider } from '@douyinfe/semi-ui'

const { Title } = Typography

function PrivacyConsentForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="fullName"
        label="Full name"
        rules={[{ required: true, message: 'Please enter your full name' }]}
      />

      <Form.Input
        field="email"
        label="Email address"
        type="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      />

      <Divider>
        <Title heading={5} style={{ margin: 0 }}>
          Communication channels
        </Title>
      </Divider>

      <Form.Checkbox field="emailOptIn">Email updates</Form.Checkbox>

      <Form.Checkbox field="smsOptIn">SMS notifications</Form.Checkbox>

      <Form.Checkbox field="phoneOptIn">Phone calls</Form.Checkbox>

      <Divider>
        <Title heading={5} style={{ margin: 0 }}>
          Privacy options
        </Title>
      </Divider>

      <Form.Checkbox field="analytics">Allow analytics cookies</Form.Checkbox>

      <Form.Checkbox field="personalization">
        Allow personalized content
      </Form.Checkbox>

      <Form.TextArea field="notes" label="Additional notes" rows={3} />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Save preferences
      </Button>
    </Form>
  )
}

export default PrivacyConsentForm
