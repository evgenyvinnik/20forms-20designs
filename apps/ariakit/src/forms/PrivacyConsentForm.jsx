import * as Ariakit from '@ariakit/react'

function PrivacyConsentForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      email: '',
      emailOptIn: false,
      smsOptIn: false,
      phoneOptIn: false,
      analytics: false,
      personalization: false,
      notes: '',
    },
  })

  form.useSubmit(() => {
    alert('Privacy preferences saved!')
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
      <Ariakit.FormGroup className="fieldset">
        <Ariakit.FormGroupLabel className="legend">
          Communication channels
        </Ariakit.FormGroupLabel>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.emailOptIn}
            className="checkbox"
          />
          <label className="label">Email updates</label>
        </div>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.smsOptIn}
            className="checkbox"
          />
          <label className="label">SMS notifications</label>
        </div>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.phoneOptIn}
            className="checkbox"
          />
          <label className="label">Phone calls</label>
        </div>
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="fieldset">
        <Ariakit.FormGroupLabel className="legend">
          Privacy options
        </Ariakit.FormGroupLabel>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.analytics}
            className="checkbox"
          />
          <label className="label">Allow analytics cookies</label>
        </div>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.personalization}
            className="checkbox"
          />
          <label className="label">Allow personalized content</label>
        </div>
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.notes} className="label">
          Additional notes
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.notes}
          render={<textarea className="textarea" rows={3} />}
        />
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Save preferences
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default PrivacyConsentForm
