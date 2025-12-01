import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Checkbox,
  ActionGroup,
  FormFieldGroup,
  FormFieldGroupHeader,
} from '@patternfly/react-core'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Full name" isRequired fieldId="pf-privacy-name">
        <TextInput
          isRequired
          type="text"
          id="pf-privacy-name"
          name="fullName"
        />
      </FormGroup>
      <FormGroup label="Email address" isRequired fieldId="pf-privacy-email">
        <TextInput isRequired type="email" id="pf-privacy-email" name="email" />
      </FormGroup>

      <FormFieldGroup
        header={
          <FormFieldGroupHeader
            titleText={{
              text: 'Communication channels',
              id: 'communication-channels',
            }}
          />
        }
      >
        <FormGroup fieldId="pf-privacy-email-opt-in">
          <Checkbox
            label="Email updates"
            id="pf-privacy-email-opt-in"
            name="emailOptIn"
          />
        </FormGroup>
        <FormGroup fieldId="pf-privacy-sms-opt-in">
          <Checkbox
            label="SMS notifications"
            id="pf-privacy-sms-opt-in"
            name="smsOptIn"
          />
        </FormGroup>
        <FormGroup fieldId="pf-privacy-phone-opt-in">
          <Checkbox
            label="Phone calls"
            id="pf-privacy-phone-opt-in"
            name="phoneOptIn"
          />
        </FormGroup>
      </FormFieldGroup>

      <FormFieldGroup
        header={
          <FormFieldGroupHeader
            titleText={{ text: 'Privacy options', id: 'privacy-options' }}
          />
        }
      >
        <FormGroup fieldId="pf-privacy-analytics">
          <Checkbox
            label="Allow analytics cookies"
            id="pf-privacy-analytics"
            name="analytics"
          />
        </FormGroup>
        <FormGroup fieldId="pf-privacy-personalization">
          <Checkbox
            label="Allow personalized content"
            id="pf-privacy-personalization"
            name="personalization"
          />
        </FormGroup>
      </FormFieldGroup>

      <FormGroup label="Additional notes" fieldId="pf-privacy-notes">
        <TextArea id="pf-privacy-notes" name="notes" rows={3} />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Save preferences
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default PrivacyConsentForm
