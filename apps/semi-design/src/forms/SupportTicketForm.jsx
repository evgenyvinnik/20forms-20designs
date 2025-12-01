import { Form, Button, Radio, Upload } from '@douyinfe/semi-ui'
import { IconUpload } from '@douyinfe/semi-icons'

function SupportTicketForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="subject"
        label="Subject"
        rules={[{ required: true, message: 'Please enter a subject' }]}
      />

      <Form.RadioGroup
        field="priority"
        label="Priority"
        rules={[{ required: true, message: 'Please select a priority' }]}
      >
        <Radio value="low">Low</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="high">High</Radio>
      </Form.RadioGroup>

      <Form.TextArea
        field="description"
        label="Issue description"
        rows={4}
        rules={[{ required: true, message: 'Please describe the issue' }]}
      />

      <Form.Upload
        field="attachments"
        label="Attachments"
        action=""
        uploadTrigger="custom"
      >
        <Button icon={<IconUpload />}>Click to Upload</Button>
      </Form.Upload>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Submit ticket
      </Button>
    </Form>
  )
}

export default SupportTicketForm
