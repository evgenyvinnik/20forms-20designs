import { Checkbox, Field, Label } from '@headlessui/react'
import { useState } from 'react'

function JobApplicationForm() {
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-job-full-name">
          Full name
        </Label>
        <input
          id="headlessui-job-full-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-job-email">
          Email address
        </Label>
        <input
          id="headlessui-job-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-job-phone">
          Phone number
        </Label>
        <input
          id="headlessui-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-job-role">
          Role applied for
        </Label>
        <input
          id="headlessui-job-role"
          name="role"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-job-resume">
          Resume link
        </Label>
        <input
          id="headlessui-job-resume"
          name="resume"
          type="url"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-job-cover-letter">
          Cover letter
        </Label>
        <textarea
          id="headlessui-job-cover-letter"
          name="coverLetter"
          rows="4"
          className="textarea"
          required
        />
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={updates}
          onChange={setUpdates}
          name="updates"
          className="checkbox"
        >
          {updates && (
            <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 8L6 11L11 3"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Checkbox>
        <Label className="checkbox-label">
          Keep me informed about future roles
        </Label>
      </Field>

      <button type="submit" className="button button-primary">
        Submit application
      </button>
    </form>
  )
}

export default JobApplicationForm
