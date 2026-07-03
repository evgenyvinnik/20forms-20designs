/** @jsxImportSource theme-ui */

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  const inputStyles = {
    width: '100%',
    padding: '8px 12px',
    fontSize: '16px',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'default',
    backgroundColor: 'inputBg',
    color: 'text',
    outline: 'none',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: '0 0 0 2px rgba(0, 119, 204, 0.2)',
    },
  }

  const labelStyles = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: 'bold',
    color: 'text',
  }

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'primary',
    border: 'none',
    borderRadius: 'default',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
  }

  const secondaryButtonStyles = {
    ...buttonStyles,
    backgroundColor: 'transparent',
    color: 'primary',
    border: '1px solid',
    borderColor: 'primary',
  }

  const selectStyles = {
    ...inputStyles,
    appearance: 'none',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '16px',
    paddingRight: '32px',
  }

  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    minHeight: '80px',
  }

  const sectionStyles = {
    marginBottom: 4,
    padding: 3,
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'default',
  }

  const headingStyles = {
    fontSize: 3,
    fontWeight: 'bold',
    marginBottom: 3,
    color: 'text',
  }

  return (
    <form onSubmit={handleSubmit}>
      <section sx={sectionStyles}>
        <h3 sx={headingStyles}>Step 1: Account</h3>
        <div sx={{ marginBottom: 3 }}>
          <label htmlFor="theme-ui-onboarding-email" sx={labelStyles}>
            Work email
          </label>
          <input
            id="theme-ui-onboarding-email"
            name="email"
            type="email"
            required
            sx={inputStyles}
          />
        </div>
        <div sx={{ marginBottom: 3 }}>
          <label htmlFor="theme-ui-onboarding-password" sx={labelStyles}>
            Password
          </label>
          <input
            id="theme-ui-onboarding-password"
            name="password"
            type="password"
            minLength="8"
            required
            sx={inputStyles}
          />
        </div>
      </section>
      <section sx={sectionStyles}>
        <h3 sx={headingStyles}>Step 2: Team</h3>
        <div sx={{ marginBottom: 3 }}>
          <label htmlFor="theme-ui-onboarding-team-name" sx={labelStyles}>
            Team name
          </label>
          <input
            id="theme-ui-onboarding-team-name"
            name="teamName"
            type="text"
            required
            sx={inputStyles}
          />
        </div>
        <div sx={{ marginBottom: 3 }}>
          <label htmlFor="theme-ui-onboarding-size" sx={labelStyles}>
            Team size
          </label>
          <select
            id="theme-ui-onboarding-size"
            name="teamSize"
            required
            sx={selectStyles}
          >
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
      </section>
      <section sx={sectionStyles}>
        <h3 sx={headingStyles}>Step 3: Preferences</h3>
        <div sx={{ marginBottom: 3 }}>
          <label htmlFor="theme-ui-onboarding-goal" sx={labelStyles}>
            Primary goal
          </label>
          <textarea
            id="theme-ui-onboarding-goal"
            name="goal"
            rows="3"
            required
            sx={textareaStyles}
          />
        </div>
        <div sx={{ marginBottom: 3 }}>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input name="updates" type="checkbox" />
            Send me product tips
          </label>
        </div>
      </section>
      <div sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => alert('Back action placeholder')}
          sx={secondaryButtonStyles}
        >
          Back
        </button>
        <button type="submit" sx={buttonStyles}>
          Finish setup
        </button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
