import { Field, Label } from '@headlessui/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-appointment-name">
          Full name
        </Label>
        <input
          id="headlessui-appointment-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-appointment-email">
          Email address
        </Label>
        <input
          id="headlessui-appointment-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-appointment-date">
          Preferred date
        </Label>
        <input
          id="headlessui-appointment-date"
          name="date"
          type="date"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-appointment-time">
          Preferred time
        </Label>
        <input
          id="headlessui-appointment-time"
          name="time"
          type="time"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-appointment-reason">
          Reason for visit
        </Label>
        <textarea
          id="headlessui-appointment-reason"
          name="reason"
          rows="3"
          className="textarea"
          required
        />
      </Field>

      <button type="submit" className="button button-primary">
        Request appointment
      </button>
    </form>
  )
}

export default AppointmentRequestForm
