import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack, Inline, Box } from '@atlaskit/primitives'
import Heading from '@atlaskit/heading'

const teamSizeOptions = [
  { label: '1-5', value: '1-5' },
  { label: '6-20', value: '6-20' },
  { label: '21-50', value: '21-50' },
  { label: '50+', value: '50+' },
]

function OnboardingWizardForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Onboarding complete!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.300">
            {/* Step 1: Account */}
            <Box padding="space.200">
              <Stack space="space.200">
                <Heading size="small">Step 1: Account</Heading>
                <Field
                  name="email"
                  label="Work email"
                  isRequired
                >
                  {({ fieldProps }) => (
                    <Textfield
                      {...fieldProps}
                      type="email"
                      placeholder="Enter your work email"
                    />
                  )}
                </Field>
                <Field
                  name="password"
                  label="Password"
                  isRequired
                >
                  {({ fieldProps }) => (
                    <Textfield
                      {...fieldProps}
                      type="password"
                      placeholder="Enter your password (min 8 characters)"
                    />
                  )}
                </Field>
              </Stack>
            </Box>

            {/* Step 2: Team */}
            <Box padding="space.200">
              <Stack space="space.200">
                <Heading size="small">Step 2: Team</Heading>
                <Field
                  name="teamName"
                  label="Team name"
                  isRequired
                >
                  {({ fieldProps }) => (
                    <Textfield
                      {...fieldProps}
                      placeholder="Enter your team name"
                    />
                  )}
                </Field>
                <Field
                  name="teamSize"
                  label="Team size"
                  isRequired
                >
                  {({ fieldProps }) => (
                    <Select
                      {...fieldProps}
                      options={teamSizeOptions}
                      placeholder="Select size"
                      inputId={fieldProps.id}
                    />
                  )}
                </Field>
              </Stack>
            </Box>

            {/* Step 3: Preferences */}
            <Box padding="space.200">
              <Stack space="space.200">
                <Heading size="small">Step 3: Preferences</Heading>
                <Field
                  name="goal"
                  label="Primary goal"
                  isRequired
                >
                  {({ fieldProps }) => (
                    <TextArea
                      {...fieldProps}
                      placeholder="Describe your primary goal"
                      minimumRows={3}
                    />
                  )}
                </Field>
                <Field name="updates" defaultValue={false}>
                  {({ fieldProps }) => (
                    <Checkbox
                      {...fieldProps}
                      label="Send me product tips"
                      isChecked={fieldProps.value}
                      onChange={(e) => fieldProps.onChange(e.target.checked)}
                    />
                  )}
                </Field>
              </Stack>
            </Box>

            <FormFooter>
              <Inline space="space.100">
                <Button
                  appearance="subtle"
                  onClick={() => alert('Back action placeholder')}
                >
                  Back
                </Button>
                <Button type="submit" appearance="primary">
                  Finish setup
                </Button>
              </Inline>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default OnboardingWizardForm
