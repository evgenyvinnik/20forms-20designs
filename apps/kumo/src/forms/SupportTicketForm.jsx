import { Button, Input, InputArea, Label, Radio } from '@cloudflare/kumo'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Subject" name="subject" type="text" required />
      <Radio.Group legend="Priority" name="priority" required>
        <Radio.Item label="Low" value="low" />
        <Radio.Item label="Medium" value="medium" />
        <Radio.Item label="High" value="high" />
      </Radio.Group>
      <InputArea
        label="Issue description"
        name="description"
        rows={4}
        required
      />
      <div className="kumo-field">
        <Label htmlFor="kumo-support-ticket-attachments">Attachments</Label>
        <input
          id="kumo-support-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="kumo-file"
        />
      </div>
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Submit ticket
        </Button>
      </div>
    </form>
  )
}

export default SupportTicketForm
