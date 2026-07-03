import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  ChoiceList,
  DropZone,
  Button,
  BlockStack,
  Text,
  InlineStack,
  Thumbnail,
} from '@shopify/polaris'

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState(['medium'])
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState([])

  const priorityOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
  ]

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles) =>
      setFiles((files) => [...files, ...acceptedFiles]),
    []
  )

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }, [])

  const fileUpload = !files.length && <DropZone.FileUpload />
  const uploadedFiles = files.length > 0 && (
    <BlockStack gap="200">
      {files.map((file, index) => (
        <InlineStack gap="200" align="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={window.URL.createObjectURL(file)}
          />
          <Text variant="bodyMd" as="p">
            {file.name}
          </Text>
        </InlineStack>
      ))}
    </BlockStack>
  )

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Subject"
          type="text"
          value={subject}
          onChange={setSubject}
          autoComplete="off"
          requiredIndicator
        />
        <ChoiceList
          title="Priority"
          choices={priorityOptions}
          selected={priority}
          onChange={setPriority}
        />
        <TextField
          label="Issue description"
          value={description}
          onChange={setDescription}
          multiline={4}
          autoComplete="off"
          requiredIndicator
        />
        <BlockStack gap="200">
          <Text as="span">Attachments</Text>
          <DropZone onDrop={handleDropZoneDrop} allowMultiple>
            {uploadedFiles}
            {fileUpload}
          </DropZone>
        </BlockStack>
        <Button submit variant="primary">
          Submit ticket
        </Button>
      </FormLayout>
    </form>
  )
}

export default SupportTicketForm
