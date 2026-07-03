import { useState } from 'react'
import { Input, Button, Select, SelectItem } from '@heroui/react'

export default function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input label="Search query" variant="bordered" isRequired name="query" />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Select
          label="Category"
          variant="bordered"
          defaultSelectedKeys={['all']}
          name="category"
        >
          <SelectItem key="all" value="all">
            All categories
          </SelectItem>
          <SelectItem key="docs" value="docs">
            Documentation
          </SelectItem>
          <SelectItem key="blog" value="blog">
            Blog posts
          </SelectItem>
        </Select>
        <Select
          label="Sort by"
          variant="bordered"
          defaultSelectedKeys={['relevance']}
          name="sortBy"
        >
          <SelectItem key="relevance" value="relevance">
            Relevance
          </SelectItem>
          <SelectItem key="date" value="date">
            Date
          </SelectItem>
        </Select>
      </div>
      <Button type="submit" color="primary" shadow>
        Search
      </Button>
    </form>
  )
}
