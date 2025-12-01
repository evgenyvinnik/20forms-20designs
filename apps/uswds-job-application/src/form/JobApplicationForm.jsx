import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function JobApplicationForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-job-full-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-job-full-name"
          name="fullName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-job-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-phone"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Phone number
        </Label>
        <TextInput
          id="uswds-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-role"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Role applied for
        </Label>
        <TextInput
          id="uswds-job-role"
          name="role"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-resume"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Resume link
        </Label>
        <TextInput
          id="uswds-job-resume"
          name="resume"
          type="url"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-cover-letter"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Cover letter
        </Label>
        <Textarea
          id="uswds-job-cover-letter"
          name="coverLetter"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-job-updates"
          name="updates"
          label="Keep me informed about future roles"
        />
      </FormGroup>
      <Button type="submit">Submit application</Button>
    </Form>
  )
}

export default JobApplicationForm
