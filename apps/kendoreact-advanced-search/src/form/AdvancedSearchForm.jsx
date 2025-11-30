import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, Checkbox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { DatePicker } from '@progress/kendo-react-dateinputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')

const categoryOptions = [
  { text: 'All', value: 'all' },
  { text: 'Articles', value: 'articles' },
  { text: 'Products', value: 'products' },
  { text: 'People', value: 'people' },
]

const sortOptions = [
  { text: 'Relevance', value: 'relevance' },
  { text: 'Newest', value: 'newest' },
  { text: 'Oldest', value: 'oldest' },
]

const FormInput = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, ...others } =
    fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <Input id={id} {...others} />
      {visited && !valid && (
        <div className="k-form-error">{validationMessage}</div>
      )}
    </div>
  )
}

const FormDropDown = (fieldRenderProps) => {
  const {
    label,
    id,
    valid,
    visited,
    validationMessage,
    value,
    onChange,
    data,
  } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <DropDownList
        id={id}
        data={data}
        textField="text"
        dataItemKey="value"
        value={data.find((item) => item.value === value) || data[0]}
        onChange={(e) => onChange({ value: e.target.value.value })}
      />
      {visited && !valid && (
        <div className="k-form-error">{validationMessage}</div>
      )}
    </div>
  )
}

const FormDatePicker = (fieldRenderProps) => {
  const { label, id, value, onChange } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <DatePicker id={id} value={value} onChange={onChange} />
    </div>
  )
}

const FormCheckbox = (fieldRenderProps) => {
  const { label, value, onChange, id } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Checkbox id={id} label={label} value={value} onChange={onChange} />
    </div>
  )
}

function AdvancedSearchForm() {
  const handleSubmit = () => {
    alert('Search submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-search-query"
            name="query"
            label="Search query"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-search-category"
            name="category"
            label="Category"
            component={FormDropDown}
            data={categoryOptions}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-search-date-from"
            name="dateFrom"
            label="Date from"
            component={FormDatePicker}
          />

          <Field
            id="kendoreact-search-date-to"
            name="dateTo"
            label="Date to"
            component={FormDatePicker}
          />

          <Field
            id="kendoreact-search-sort"
            name="sort"
            label="Sort by"
            component={FormDropDown}
            data={sortOptions}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-search-archived"
            name="includeArchived"
            label="Include archived"
            component={FormCheckbox}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button
              type="submit"
              themeColor="primary"
              disabled={!formRenderProps.allowSubmit}
            >
              Search
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default AdvancedSearchForm
