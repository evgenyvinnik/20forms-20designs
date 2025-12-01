import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormCheck,
  CButton,
} from '@coreui/react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-privacy-name">Full name</CFormLabel>
        <CFormInput
          id="coreui-privacy-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-privacy-email">Email address</CFormLabel>
        <CFormInput
          id="coreui-privacy-email"
          name="email"
          type="email"
          required
        />
      </div>
      <fieldset className="mb-3">
        <legend className="fs-6">Communication channels</legend>
        <CFormCheck
          id="coreui-privacy-email-opt"
          name="emailOptIn"
          label="Email updates"
        />
        <CFormCheck
          id="coreui-privacy-sms-opt"
          name="smsOptIn"
          label="SMS notifications"
        />
        <CFormCheck
          id="coreui-privacy-phone-opt"
          name="phoneOptIn"
          label="Phone calls"
        />
      </fieldset>
      <fieldset className="mb-3">
        <legend className="fs-6">Privacy options</legend>
        <CFormCheck
          id="coreui-privacy-analytics"
          name="analytics"
          label="Allow analytics cookies"
        />
        <CFormCheck
          id="coreui-privacy-personalization"
          name="personalization"
          label="Allow personalized content"
        />
      </fieldset>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-privacy-notes">Additional notes</CFormLabel>
        <CFormTextarea id="coreui-privacy-notes" name="notes" rows={3} />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Save preferences
        </CButton>
      </div>
    </CForm>
  )
}

export default PrivacyConsentForm
