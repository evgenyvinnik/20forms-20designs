import { Form, Button } from '@douyinfe/semi-ui'

function ProfileUpdateForm() {
  const handleSubmit = (values) => {
    alert('Profile saved!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="displayName"
        label="Display name"
        initValue="Jane Doe"
        rules={[{ required: true, message: 'Please enter your display name' }]}
      />

      <Form.Input
        field="email"
        label="Public email"
        type="email"
        initValue="jane@example.com"
        rules={[{ required: true, message: 'Please enter your email' }]}
      />

      <Form.TextArea
        field="bio"
        label="Bio"
        rows={3}
        initValue="Software developer based in San Francisco."
      />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Save profile
      </Button>
    </Form>
  )
}

export default ProfileUpdateForm
