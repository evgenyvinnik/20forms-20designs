import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { RadioGroup, Radio, ALIGN } from 'baseui/radio'
import { FileUploader } from 'baseui/file-uploader'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography'
import { useState } from 'react'

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('low')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Subject">
          <Input
            id="baseweb-ticket-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </FormControl>
        <Block>
          <LabelMedium marginBottom="scale300">Priority</LabelMedium>
          <RadioGroup
            value={priority}
            onChange={(e) => setPriority(e.currentTarget.value)}
            name="priority"
            align={ALIGN.vertical}
          >
            <Radio value="low">Low</Radio>
            <Radio value="medium">Medium</Radio>
            <Radio value="high">High</Radio>
          </RadioGroup>
        </Block>
        <FormControl label="Issue description">
          <Textarea
            id="baseweb-ticket-description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Attachments">
          <FileUploader multiple />
        </FormControl>
        <Button type="submit">Submit ticket</Button>
      </Block>
    </form>
  )
}

export default SupportTicketForm
