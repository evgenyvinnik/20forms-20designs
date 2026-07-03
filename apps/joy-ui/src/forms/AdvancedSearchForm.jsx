import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'

export default function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Search query</FormLabel>
        <Input name="query" type="text" required />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select name="category" defaultValue="all">
            <Option value="all">All categories</Option>
            <Option value="docs">Documentation</Option>
            <Option value="blog">Blog posts</Option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Sort by</FormLabel>
          <Select name="sortBy" defaultValue="relevance">
            <Option value="relevance">Relevance</Option>
            <Option value="date">Date</Option>
          </Select>
        </FormControl>
      </Box>
      <Button type="submit">Search</Button>
    </Box>
  )
}
