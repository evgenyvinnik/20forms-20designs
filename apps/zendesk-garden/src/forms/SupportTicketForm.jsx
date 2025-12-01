import { useState, useCallback } from 'react'
import {
  Field,
  Label,
  Input,
  Textarea,
  Radio,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { SM } from '@zendeskgarden/react-typography'

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Subject</Label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <SM isBold tag="div" style={{ marginBottom: '8px' }}>
                Priority
              </SM>
              <Field style={{ marginBottom: '8px' }}>
                <Radio
                  name="priority"
                  value="low"
                  checked={priority === 'low'}
                  onChange={() => setPriority('low')}
                >
                  <Label>Low</Label>
                </Radio>
              </Field>
              <Field style={{ marginBottom: '8px' }}>
                <Radio
                  name="priority"
                  value="medium"
                  checked={priority === 'medium'}
                  onChange={() => setPriority('medium')}
                >
                  <Label>Medium</Label>
                </Radio>
              </Field>
              <Field>
                <Radio
                  name="priority"
                  value="high"
                  checked={priority === 'high'}
                  onChange={() => setPriority('high')}
                >
                  <Label>High</Label>
                </Radio>
              </Field>
            </fieldset>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Issue description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Attachments</Label>
              <Input type="file" multiple />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Submit ticket
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default SupportTicketForm
