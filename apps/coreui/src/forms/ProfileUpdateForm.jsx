import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
} from '@coreui/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-profile-first-name">First name</CFormLabel>
        <CFormInput
          id="coreui-profile-first-name"
          name="firstName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-profile-last-name">Last name</CFormLabel>
        <CFormInput
          id="coreui-profile-last-name"
          name="lastName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-profile-email">Email address</CFormLabel>
        <CFormInput
          id="coreui-profile-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-profile-phone">Phone number</CFormLabel>
        <CFormInput
          id="coreui-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-profile-bio">Short bio</CFormLabel>
        <CFormTextarea id="coreui-profile-bio" />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Save changes
        </CButton>
      </div>
    </CForm>
  )
}

export default ProfileUpdateForm
