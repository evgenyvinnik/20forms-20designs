import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CButton,
} from '@coreui/react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-password-change-current">
          Current password
        </CFormLabel>
        <CFormInput
          id="coreui-password-change-current"
          name="currentPassword"
          type="password"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-password-change-new">
          New password
        </CFormLabel>
        <CFormInput
          id="coreui-password-change-new"
          name="newPassword"
          type="password"
          minLength={8}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-password-change-confirm">
          Confirm new password
        </CFormLabel>
        <CFormInput
          id="coreui-password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-password-change-logout"
          name="logoutOthers"
          label="Sign out of other devices"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Update password
        </CButton>
      </div>
    </CForm>
  )
}

export default PasswordChangeForm
