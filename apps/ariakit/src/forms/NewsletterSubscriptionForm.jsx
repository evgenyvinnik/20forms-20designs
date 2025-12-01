import * as Ariakit from '@ariakit/react'

function NewsletterSubscriptionForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      email: '',
      frequency: '',
      agree: false,
    },
  })

  form.useSubmit(() => {
    alert('Newsletter subscription submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
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
        <Ariakit.FormLabel name={form.names.frequency} className="label">
          Frequency
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.frequency}
          render={
            <select className="select">
              <option value="">Select frequency</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox name={form.names.agree} className="checkbox" />
        <span className="checkbox-label">Receive product updates</span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Subscribe
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default NewsletterSubscriptionForm
