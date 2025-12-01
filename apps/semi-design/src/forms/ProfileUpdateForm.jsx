import { Form, Button } from '@douyinfe/semi-ui'

function ProfileUpdateForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="firstName"
        label="First name"
        rules={[{ required: true, message: 'Please enter your first name' }]}
      />

      <Form.Input
        field="lastName"
        label="Last name"
        rules={[{ required: true, message: 'Please enter your last name' }]}
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

      <Form.Input
        field="phone"
        label="Phone number"
        type="tel"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      />

      <Form.TextArea
        field="bio"
        label="Short bio"
        rows={3}
        rules={[{ required: true, message: 'Please enter a short bio' }]}
      />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Save changes
      </Button>
    </Form>
  )
}

export default ProfileUpdateForm
