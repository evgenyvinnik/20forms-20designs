import { Form, Button } from '@douyinfe/semi-ui'

function ProfileUpdateForm() {
  const handleSubmit = (values) => {
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="firstName"
        label="First name"
        rules={[{ required: true }]}
      />

      <Form.Input
        field="lastName"
        label="Last name"
        rules={[{ required: true }]}
      />

      <Form.Input
        field="email"
        label="Email address"
        type="email"
        rules={[{ required: true }]}
      />

      <Form.Input
        field="phone"
        label="Phone number"
        type="tel"
        rules={[{ required: true }]}
      />

      <Form.TextArea
        field="bio"
        label="Short bio"
        rows={3}
        rules={[{ required: true }]}
      />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Save changes
      </Button>
    </Form>
  )
}

export default ProfileUpdateForm
