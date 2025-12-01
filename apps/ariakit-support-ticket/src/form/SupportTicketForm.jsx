import * as Ariakit from '@ariakit/react'

function SupportTicketForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      subject: '',
      priority: '',
      description: '',
    },
  })

  form.useSubmit(() => {
    alert('Support ticket submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.subject} className="label">
          Subject
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.subject}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormRadioGroup name={form.names.priority} className="fieldset">
        <Ariakit.FormGroupLabel className="legend">Priority</Ariakit.FormGroupLabel>
        <div className="radio-group">
          <label className="radio-wrapper">
            <Ariakit.FormRadio value="low" className="radio" required />
            <span className="radio-label">Low</span>
          </label>
          <label className="radio-wrapper">
            <Ariakit.FormRadio value="medium" className="radio" />
            <span className="radio-label">Medium</span>
          </label>
          <label className="radio-wrapper">
            <Ariakit.FormRadio value="high" className="radio" />
            <span className="radio-label">High</span>
          </label>
        </div>
      </Ariakit.FormRadioGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.description} className="label">
          Issue description
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.description}
          render={<textarea rows={4} className="textarea" />}
          required
        />
      </Ariakit.FormGroup>
      <div className="form-field">
        <label htmlFor="ariakit-ticket-attachments" className="label">
          Attachments
        </label>
        <input
          id="ariakit-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="file-input"
        />
      </div>
      <Ariakit.FormSubmit className="button button-primary">
        Submit ticket
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default SupportTicketForm
