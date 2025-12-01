import * as Ariakit from '@ariakit/react'

function AppointmentRequestForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      email: '',
      date: '',
      time: '',
      reason: '',
    },
  })

  form.useSubmit(() => {
    alert('Appointment request submitted!')
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
        <Ariakit.FormLabel name={form.names.date} className="label">
          Preferred date
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.date}
          type="date"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.time} className="label">
          Preferred time
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.time}
          type="time"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.reason} className="label">
          Reason for visit
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.reason}
          render={<textarea rows={3} className="textarea" />}
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Request appointment
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default AppointmentRequestForm
