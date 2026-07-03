/** @jsxImportSource theme-ui */

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
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

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-profile-first-name" sx={labelStyles}>
          First name
        </label>
        <input
          id="theme-ui-profile-first-name"
          name="firstName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-profile-last-name" sx={labelStyles}>
          Last name
        </label>
        <input
          id="theme-ui-profile-last-name"
          name="lastName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-profile-email" sx={labelStyles}>
          Email address
        </label>
        <input
          id="theme-ui-profile-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-profile-phone" sx={labelStyles}>
          Phone number
        </label>
        <input
          id="theme-ui-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-profile-bio" sx={labelStyles}>
          Short bio
        </label>
        <textarea
          id="theme-ui-profile-bio"

          sx={textareaStyles}
        />
      </div>
      <button type="submit" sx={buttonStyles}>
        Save changes
      </button>
    </form>
  )
}

export default ProfileUpdateForm
