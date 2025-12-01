import { Form, Button, Select } from '@douyinfe/semi-ui'

function CustomerFeedbackForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
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

      <Form.Select
        field="rating"
        label="Overall rating"
        placeholder="Select rating"
        rules={[{ required: true, message: 'Please select a rating' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="excellent">Excellent</Select.Option>
        <Select.Option value="good">Good</Select.Option>
        <Select.Option value="average">Average</Select.Option>
        <Select.Option value="poor">Poor</Select.Option>
      </Form.Select>

      <Form.TextArea
        field="comments"
        label="Comments"
        rows={4}
        rules={[{ required: true, message: 'Please enter your comments' }]}
      />

      <Form.Checkbox field="followUp">I would like a follow-up</Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Send feedback
      </Button>
    </Form>
  )
}

export default CustomerFeedbackForm
