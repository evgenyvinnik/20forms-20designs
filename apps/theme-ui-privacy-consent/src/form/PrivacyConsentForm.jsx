/** @jsxImportSource theme-ui */

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
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

  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    minHeight: '80px',
  }

  const fieldsetStyles = {
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'default',
    padding: 3,
    marginBottom: 3,
  }

  const legendStyles = {
    fontWeight: 'bold',
    color: 'text',
    padding: '0 8px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-privacy-name" sx={labelStyles}>
          Full name
        </label>
        <input
          id="theme-ui-privacy-name"
          name="fullName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-privacy-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-privacy-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <fieldset sx={fieldsetStyles}>
        <legend sx={legendStyles}>Communication channels</legend>
        <div sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input name="emailOptIn" type="checkbox" />
            Email updates
          </label>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input name="smsOptIn" type="checkbox" />
            SMS notifications
          </label>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input name="phoneOptIn" type="checkbox" />
            Phone calls
          </label>
        </div>
      </fieldset>
      <fieldset sx={fieldsetStyles}>
        <legend sx={legendStyles}>Privacy options</legend>
        <div sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input name="analytics" type="checkbox" />
            Allow analytics cookies
          </label>
          <label
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
            }}
          >
            <input name="personalization" type="checkbox" />
            Allow personalized content
          </label>
        </div>
      </fieldset>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-privacy-notes" sx={labelStyles}>
          Additional notes
        </label>
        <textarea
          id="theme-ui-privacy-notes"
          name="notes"
          rows="3"
          sx={textareaStyles}
        />
      </div>
      <button type="submit" sx={buttonStyles}>
        Save preferences
      </button>
    </form>
  )
}

export default PrivacyConsentForm
