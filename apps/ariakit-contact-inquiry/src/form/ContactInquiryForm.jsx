import * as Ariakit from '@ariakit/react'

function ContactInquiryForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      email: '',
      topic: '',
      message: '',
      consent: false,
    },
  })

  form.useSubmit(() => {
    alert('Inquiry submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.fullName} className="label">
          Full name
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.fullName}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.email} className="label">
          Email address
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.email}
          type="email"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.topic} className="label">
          Topic
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.topic}
          render={
            <select className="select">
              <option value="">Select topic</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.message} className="label">
          Message
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.message}
          render={<textarea rows={4} className="textarea" />}
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox name={form.names.consent} className="checkbox" />
        <span className="checkbox-label">Allow follow-up communication</span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Submit inquiry
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default ContactInquiryForm
