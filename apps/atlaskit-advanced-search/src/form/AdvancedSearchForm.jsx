import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

const categoryOptions = [
  { label: 'All', value: 'all' },
  { label: 'Articles', value: 'articles' },
  { label: 'Products', value: 'products' },
  { label: 'People', value: 'people' },
]

const sortOptions = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
]

function AdvancedSearchForm() {
  const handleSubmit = () => {
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field name="query" label="Search query" isRequired>
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter search terms..."
                />
              )}
            </Field>

            <Field
              name="category"
              label="Category"
              isRequired
              defaultValue={categoryOptions[0]}
            >
              {({ fieldProps: { id, ...rest } }) => (
                <Select
                  inputId={id}
                  {...rest}
                  options={categoryOptions}
                  placeholder="Select category"
                />
              )}
            </Field>

            <Field name="dateFrom" label="Date from">
              {({ fieldProps }) => <Textfield {...fieldProps} type="date" />}
            </Field>

            <Field name="dateTo" label="Date to">
              {({ fieldProps }) => <Textfield {...fieldProps} type="date" />}
            </Field>

            <Field
              name="sort"
              label="Sort by"
              isRequired
              defaultValue={sortOptions[0]}
            >
              {({ fieldProps: { id, ...rest } }) => (
                <Select
                  inputId={id}
                  {...rest}
                  options={sortOptions}
                  placeholder="Select sort order"
                />
              )}
            </Field>

            <Field name="includeArchived" defaultValue={false}>
              {({ fieldProps: { value, ...rest } }) => (
                <Checkbox
                  {...rest}
                  isChecked={value}
                  label="Include archived"
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Search
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default AdvancedSearchForm
