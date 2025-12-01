import * as Ariakit from '@ariakit/react'

function CustomerFeedbackForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      name: '',
      email: '',
      rating: '',
      comments: '',
      followUp: false,
    },
  })

  form.useSubmit(() => {
    alert('Feedback submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.name} className="label">
          Name
        </Ariakit.FormLabel>
        <Ariakit.FormInput name={form.names.name} className="input" required />
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
        <Ariakit.FormLabel name={form.names.rating} className="label">
          Overall rating
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.rating}
          render={
            <select className="select">
              <option value="">Select rating</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.comments} className="label">
          Comments
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.comments}
          render={<textarea rows={4} className="textarea" />}
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox name={form.names.followUp} className="checkbox" />
        <span className="checkbox-label">I would like a follow-up</span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Send feedback
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default CustomerFeedbackForm
