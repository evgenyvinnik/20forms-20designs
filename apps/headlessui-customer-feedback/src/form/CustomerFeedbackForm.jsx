import {
  Checkbox,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { useState } from 'react'

const ratings = [
  { value: '', label: 'Select rating' },
  { value: 'excellent', label: 'Excellent' },
  { value: 'good', label: 'Good' },
  { value: 'average', label: 'Average' },
  { value: 'poor', label: 'Poor' },
]

function CustomerFeedbackForm() {
  const [rating, setRating] = useState(ratings[0])
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-feedback-name">
          Name
        </Label>
        <input
          id="headlessui-feedback-name"
          name="name"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-feedback-email">
          Email address
        </Label>
        <input
          id="headlessui-feedback-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Overall rating</Label>
        <Listbox value={rating} onChange={setRating} name="rating">
          <div className="select-wrapper">
            <ListboxButton className="select-button">
              <span>{rating.label}</span>
              <svg
                className="select-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {ratings.map((r) => (
                <ListboxOption
                  key={r.value}
                  value={r}
                  className="select-option"
                >
                  {r.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-feedback-comments">
          Comments
        </Label>
        <textarea
          id="headlessui-feedback-comments"
          name="comments"
          rows="4"
          className="textarea"
          required
        />
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={followUp}
          onChange={setFollowUp}
          name="followUp"
          className="checkbox"
        >
          {followUp && (
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
        <Label className="checkbox-label">I would like a follow-up</Label>
      </Field>

      <button type="submit" className="button button-primary">
        Send feedback
      </button>
    </form>
  )
}

export default CustomerFeedbackForm
