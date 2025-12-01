import {
  Button,
  Checkbox,
  Field,
  Input,
  Select,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function AdvancedSearchForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Search query" required>
        <Input id="fluent-ui-search-query" name="query" type="text" required />
      </Field>
      <Field label="Category" required>
        <Select id="fluent-ui-search-category" name="category" required>
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </Select>
      </Field>
      <Field label="Date from">
        <Input id="fluent-ui-search-date-from" name="dateFrom" type="date" />
      </Field>
      <Field label="Date to">
        <Input id="fluent-ui-search-date-to" name="dateTo" type="date" />
      </Field>
      <Field label="Sort by" required>
        <Select id="fluent-ui-search-sort" name="sort" required>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </Field>
      <Checkbox name="includeArchived" label="Include archived" />
      <Button type="submit" appearance="primary">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
