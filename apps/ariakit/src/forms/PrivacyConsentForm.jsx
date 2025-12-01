import * as Ariakit from '@ariakit/react'

function PrivacyConsentForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      essential: true,
      analytics: false,
      marketing: false,
      thirdParty: false,
    },
  })

  form.useSubmit(() => {
    alert('Privacy preferences saved!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="fieldset">
        <Ariakit.FormGroupLabel className="legend">
          Essential cookies
        </Ariakit.FormGroupLabel>
        <p className="description">
          Required for the website to function properly.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.essential}
            className="checkbox"
            disabled
          />
          <label className="label">Enable essential cookies</label>
        </div>
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="fieldset">
        <Ariakit.FormGroupLabel className="legend">
          Analytics cookies
        </Ariakit.FormGroupLabel>
        <p className="description">
          Help us understand how visitors interact with our website.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.analytics}
            className="checkbox"
          />
          <label className="label">Enable analytics cookies</label>
        </div>
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="fieldset">
        <Ariakit.FormGroupLabel className="legend">
          Marketing cookies
        </Ariakit.FormGroupLabel>
        <p className="description">
          Used to deliver personalized advertisements.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.marketing}
            className="checkbox"
          />
          <label className="label">Enable marketing cookies</label>
        </div>
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="fieldset">
        <Ariakit.FormGroupLabel className="legend">
          Third-party cookies
        </Ariakit.FormGroupLabel>
        <p className="description">
          Allow third-party services to collect data.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.thirdParty}
            className="checkbox"
          />
          <label className="label">Enable third-party cookies</label>
        </div>
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Save preferences
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default PrivacyConsentForm
