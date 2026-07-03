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
    alert('Search submitted!')
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
            <Option value="all">All</Option>
            <Option value="articles">Articles</Option>
            <Option value="products">Products</Option>
            <Option value="people">People</Option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Sort by</FormLabel>
          <Select name="sort" defaultValue="relevance">
            <Option value="relevance">Relevance</Option>
            <Option value="newest">Newest</Option>
            <Option value="oldest">Oldest</Option>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl>
          <FormLabel>Date from</FormLabel>
          <Input name="dateFrom" type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Date to</FormLabel>
          <Input name="dateTo" type="date" />
        </FormControl>
      </Box>
      <Checkbox name="includeArchived" label="Include archived" />
      <Button type="submit">Search</Button>
    </Box>
  )
}
