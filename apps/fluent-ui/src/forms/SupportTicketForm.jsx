import {
  Button,
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
  Textarea,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function SupportTicketForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Subject" required>
        <Input
          id="fluent-ui-ticket-subject"
          name="subject"
          type="text"
          required
        />
      </Field>
      <Field label="Priority" required>
        <RadioGroup name="priority" required>
          <Radio value="low" label="Low" />
          <Radio value="medium" label="Medium" />
          <Radio value="high" label="High" />
        </RadioGroup>
      </Field>
      <Field label="Issue description" required>
        <Textarea
          id="fluent-ui-ticket-description"
          name="description"
          rows={4}
          required
        />
      </Field>
      <Field label="Attachments">
        <Input
          id="fluent-ui-ticket-attachments"
          name="attachments"
          type="file"
          multiple
        />
      </Field>
      <Button type="submit" appearance="primary">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
