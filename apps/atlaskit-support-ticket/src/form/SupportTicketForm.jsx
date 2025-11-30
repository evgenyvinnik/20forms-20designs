import Button from '@atlaskit/button/new'
import Form, { Field, FormFooter, Fieldset } from '@atlaskit/form'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { RadioGroup } from '@atlaskit/radio'
import { Stack, Text } from '@atlaskit/primitives'
import { token } from '@atlaskit/tokens'

const priorityOptions = [
  { name: 'priority', value: 'low', label: 'Low' },
  { name: 'priority', value: 'medium', label: 'Medium' },
  { name: 'priority', value: 'high', label: 'High' },
]

function SupportTicketForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="subject"
              label="Subject"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter ticket subject"
                />
              )}
            </Field>

            <Fieldset legend="Priority">
              <Field
                name="priority"
                isRequired
                defaultValue="low"
              >
                {({ fieldProps }) => (
                  <RadioGroup
                    {...fieldProps}
                    options={priorityOptions}
                  />
                )}
              </Field>
            </Fieldset>

            <Field
              name="description"
              label="Issue description"
              isRequired
            >
              {({ fieldProps }) => (
                <TextArea
                  {...fieldProps}
                  placeholder="Describe your issue in detail"
                  minimumRows={4}
                />
              )}
            </Field>

            <div>
              <Text as="label" weight="semibold">
                Attachments
              </Text>
              <div style={{ marginTop: token('space.100', '8px') }}>
                <input
                  type="file"
                  name="attachments"
                  multiple
                  style={{
                    fontFamily: 'inherit',
                    fontSize: '14px',
                  }}
                />
              </div>
            </div>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Submit ticket
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default SupportTicketForm
