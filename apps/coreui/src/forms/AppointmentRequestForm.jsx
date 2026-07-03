import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
} from '@coreui/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-appointment-name">Full name</CFormLabel>
        <CFormInput
          id="coreui-appointment-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-appointment-email">
          Email address
        </CFormLabel>
        <CFormInput
          id="coreui-appointment-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-appointment-date">
          Preferred date
        </CFormLabel>
        <CFormInput
          id="coreui-appointment-date"
          name="date"
          type="date"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-appointment-time">
          Preferred time
        </CFormLabel>
        <CFormInput
          id="coreui-appointment-time"
          name="time"
          type="time"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-appointment-reason">
          Reason for visit
        </CFormLabel>
        <CFormTextarea
          id="coreui-appointment-reason"
          name="reason"
          rows={3}
          required
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Request appointment
        </CButton>
      </div>
    </CForm>
  )
}

export default AppointmentRequestForm
