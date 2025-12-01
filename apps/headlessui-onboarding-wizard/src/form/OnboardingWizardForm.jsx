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

const teamSizes = [
  { value: '', label: 'Select size' },
  { value: '1-5', label: '1-5' },
  { value: '6-20', label: '6-20' },
  { value: '21-50', label: '21-50' },
  { value: '50+', label: '50+' },
]

function OnboardingWizardForm() {
  const [teamSize, setTeamSize] = useState(teamSizes[0])
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <section className="section">
        <h3 className="section-title">Step 1: Account</h3>
        <div className="form-stack">
          <Field className="form-field">
            <Label className="label" htmlFor="headlessui-onboarding-email">
              Work email
            </Label>
            <input
              id="headlessui-onboarding-email"
              name="email"
              type="email"
              className="input"
              required
            />
          </Field>

          <Field className="form-field">
            <Label className="label" htmlFor="headlessui-onboarding-password">
              Password
            </Label>
            <input
              id="headlessui-onboarding-password"
              name="password"
              type="password"
              minLength="8"
              className="input"
              required
            />
          </Field>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">Step 2: Team</h3>
        <div className="form-stack">
          <Field className="form-field">
            <Label className="label" htmlFor="headlessui-onboarding-team-name">
              Team name
            </Label>
            <input
              id="headlessui-onboarding-team-name"
              name="teamName"
              type="text"
              className="input"
              required
            />
          </Field>

          <Field className="form-field">
            <Label className="label">Team size</Label>
            <Listbox value={teamSize} onChange={setTeamSize} name="teamSize">
              <div className="select-wrapper">
                <ListboxButton className="select-button">
                  <span>{teamSize.label}</span>
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
                  {teamSizes.map((size) => (
                    <ListboxOption
                      key={size.value}
                      value={size}
                      className="select-option"
                    >
                      {size.label}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </Field>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">Step 3: Preferences</h3>
        <div className="form-stack">
          <Field className="form-field">
            <Label className="label" htmlFor="headlessui-onboarding-goal">
              Primary goal
            </Label>
            <textarea
              id="headlessui-onboarding-goal"
              name="goal"
              rows="3"
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
            <Label className="checkbox-label">Send me product tips</Label>
          </Field>
        </div>
      </section>

      <div className="form-row">
        <button
          type="button"
          className="button button-secondary"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </button>
        <button type="submit" className="button button-primary">
          Finish setup
        </button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
