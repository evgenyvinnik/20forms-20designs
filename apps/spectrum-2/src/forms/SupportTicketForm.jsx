import {
  Button,
  ButtonGroup,
  Form,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
} from '@react-spectrum/s2'
import { style } from '@react-spectrum/s2/style' with { type: 'macro' }

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Subject" name="subject" isRequired />
      <RadioGroup label="Priority" name="priority" isRequired>
        <Radio value="low">Low</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="high">High</Radio>
      </RadioGroup>
      <TextArea label="Issue description" name="description" isRequired />
      <div
        className={style({ display: 'flex', flexDirection: 'column', gap: 8 })}
      >
        <label
          htmlFor="s2-support-ticket-attachments"
          className={style({ font: 'ui', color: 'neutral-subdued' })}
        >
          Attachments
        </label>
        <input
          id="s2-support-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className={style({ font: 'ui', color: 'neutral' })}
        />
      </div>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Submit ticket
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default SupportTicketForm
