import {
  Button,
  Input,
  Checkbox,
  Select,
  DatePicker,
  Radio,
  InputNumber,
  TimePicker,
  Switch,
  Form,
  Space,
} from '@arco-design/web-react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-ticket-subject"
          >
            Subject
          </label>
          <Input
            id="nocss-ticket-subject"
            name="subject"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <fieldset>
            <legend>Priority</legend>
            <div>
              <label style={{ display: 'block', marginBottom: '4px' }}>
                <Radio
                  id="nocss-ticket-priority-low"
                  type="radio"
                  name="priority"
                  value="low"
                  required
                />
                Low
              </label>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px' }}>
                <Radio
                  id="nocss-ticket-priority-medium"
                  type="radio"
                  name="priority"
                  value="medium"
                />
                Medium
              </label>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px' }}>
                <Radio
                  id="nocss-ticket-priority-high"
                  type="radio"
                  name="priority"
                  value="high"
                />
                High
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-ticket-description"
          >
            Issue description
          </label>
          <Input.TextArea
            id="nocss-ticket-description"
            name="description"
            rows="4"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-ticket-attachments"
          >
            Attachments
          </label>
          <input
            id="nocss-ticket-attachments"
            name="attachments"
            type="file"
            multiple
          />
        </div>
        <Button type="primary" htmlType="submit">
          Submit ticket
        </Button>
      </Space>
    </form>
  )
}

export default SupportTicketForm
