import { Form, Input, Button, Radio, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const { TextArea } = Input

function SupportTicketForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Support ticket submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: 'Please enter a subject' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Priority"
        name="priority"
        rules={[{ required: true, message: 'Please select a priority' }]}
      >
        <Radio.Group>
          <Radio value="low">Low</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="high">High</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Issue description"
        name="description"
        rules={[{ required: true, message: 'Please describe the issue' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Attachments" name="attachments">
        <Upload multiple beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit ticket
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SupportTicketForm
