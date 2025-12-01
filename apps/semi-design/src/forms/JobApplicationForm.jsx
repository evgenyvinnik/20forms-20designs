import { Form, Button } from '@douyinfe/semi-ui'

function JobApplicationForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Application submitted!')
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

      <Form.Input
        field="phone"
        label="Phone number"
        type="tel"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      />

      <Form.Input
        field="role"
        label="Role applied for"
        rules={[{ required: true, message: 'Please enter the role' }]}
      />

      <Form.Input
        field="resume"
        label="Resume link"
        type="url"
        rules={[
          { required: true, message: 'Please enter your resume link' },
          { type: 'url', message: 'Please enter a valid URL' },
        ]}
      />

      <Form.TextArea
        field="coverLetter"
        label="Cover letter"
        rows={4}
        rules={[{ required: true, message: 'Please enter your cover letter' }]}
      />

      <Form.Checkbox field="updates">
        Keep me informed about future roles
      </Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Submit application
      </Button>
    </Form>
  )
}

export default JobApplicationForm
