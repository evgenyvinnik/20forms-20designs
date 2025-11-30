import { Form, Input, Button } from 'antd'

const { TextArea } = Input

function ProfileUpdateForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Profile updated!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="First name"
        name="firstName"
        rules={[{ required: true, message: 'Please enter your first name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: 'Please enter your last name' }]}
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
        label="Phone number"
        name="phone"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input type="tel" />
      </Form.Item>

      <Form.Item
        label="Short bio"
        name="bio"
        rules={[{ required: true, message: 'Please enter a short bio' }]}
      >
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save changes
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProfileUpdateForm
