import { Form, Input, Button, Checkbox } from 'antd'

const { TextArea } = Input

function JobApplicationForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Application submitted!')
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

      <Form.Item
        label="Phone number"
        name="phone"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input type="tel" />
      </Form.Item>

      <Form.Item
        label="Role applied for"
        name="role"
        rules={[{ required: true, message: 'Please enter the role' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Resume link"
        name="resume"
        rules={[
          { required: true, message: 'Please enter your resume link' },
          { type: 'url', message: 'Please enter a valid URL' },
        ]}
      >
        <Input type="url" />
      </Form.Item>

      <Form.Item
        label="Cover letter"
        name="coverLetter"
        rules={[{ required: true, message: 'Please enter your cover letter' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item name="updates" valuePropName="checked">
        <Checkbox>Keep me informed about future roles</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit application
        </Button>
      </Form.Item>
    </Form>
  )
}

export default JobApplicationForm
