import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'

export default function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <FormControl required>
        <FormLabel htmlFor="joy-search-query">Search query</FormLabel>
        <Input id="joy-search-query" name="query" type="text" required />
      </FormControl>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl>
          <FormLabel htmlFor="joy-search-category">Category</FormLabel>
          <Select id="joy-search-category" name="category" defaultValue="all">
            <Option value="all">All categories</Option>
            <Option value="docs">Documentation</Option>
            <Option value="blog">Blog posts</Option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="joy-search-sort">Sort by</FormLabel>
          <Select id="joy-search-sort" name="sortBy" defaultValue="relevance">
            <Option value="relevance">Relevance</Option>
            <Option value="date">Date</Option>
          </Select>
        </FormControl>
      </Box>

      <Button type="submit">Search</Button>
    </Box>
  )
}
