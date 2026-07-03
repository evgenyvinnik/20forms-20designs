import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CFormCheck,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <CCard className="mb-3">
        <CCardHeader>Step 1: Account</CCardHeader>
        <CCardBody>
          <div className="mb-3">
            <CFormLabel htmlFor="coreui-onboarding-email">
              Work email
            </CFormLabel>
            <CFormInput
              id="coreui-onboarding-email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="coreui-onboarding-password">
              Password
            </CFormLabel>
            <CFormInput
              id="coreui-onboarding-password"
              name="password"
              type="password"
              minLength={8}
              required
            />
          </div>
        </CCardBody>
      </CCard>

      <CCard className="mb-3">
        <CCardHeader>Step 2: Team</CCardHeader>
        <CCardBody>
          <div className="mb-3">
            <CFormLabel htmlFor="coreui-onboarding-team-name">
              Team name
            </CFormLabel>
            <CFormInput
              id="coreui-onboarding-team-name"
              name="teamName"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="coreui-onboarding-size">Team size</CFormLabel>
            <CFormSelect id="coreui-onboarding-size" name="teamSize" required>
              <option value="">Select size</option>
              <option value="1-5">1-5</option>
              <option value="6-20">6-20</option>
              <option value="21-50">21-50</option>
              <option value="50+">50+</option>
            </CFormSelect>
          </div>
        </CCardBody>
      </CCard>

      <CCard className="mb-3">
        <CCardHeader>Step 3: Preferences</CCardHeader>
        <CCardBody>
          <div className="mb-3">
            <CFormLabel htmlFor="coreui-onboarding-goal">
              Primary goal
            </CFormLabel>
            <CFormTextarea
              id="coreui-onboarding-goal"
              name="goal"
              rows={3}
              required
            />
          </div>
          <div className="mb-3">
            <CFormCheck
              id="coreui-onboarding-updates"
              name="updates"
              label="Send me product tips"
            />
          </div>
        </CCardBody>
      </CCard>

      <div className="d-flex gap-2">
        <CButton
          type="button"
          color="secondary"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </CButton>
        <CButton type="submit" color="primary">
          Finish setup
        </CButton>
      </div>
    </CForm>
  )
}

export default OnboardingWizardForm
