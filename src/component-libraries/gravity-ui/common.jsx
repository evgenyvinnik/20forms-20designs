import { useMemo, useState } from 'react'
import { Select, Text } from '@gravity-ui/uikit'

export const formStackStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}
export const fieldStackStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
}

export function Field({ label, htmlFor, children }) {
  return (
    <div style={fieldStackStyle}>
      {label && (
        <Text as="label" variant="body-2" htmlFor={htmlFor}>
          {label}
        </Text>
      )}
      {children}
    </div>
  )
}

export function SingleSelectField({
  id,
  name,
  label,
  options,
  placeholder,
  defaultValue,
  value: controlledValue,
  onUpdate,
}) {
  const initial = useMemo(
    () => (defaultValue ? [defaultValue] : []),
    [defaultValue]
  )
  const [value, setValue] = useState(initial)

  const selectValue = controlledValue ?? value

  const handleUpdate = (next) => {
    setValue(next)
    onUpdate?.(next)
  }

  return (
    <Field label={label} htmlFor={id}>
      <Select
        id={id}
        name={name}
        options={options}
        value={selectValue}
        placeholder={placeholder}
        onUpdate={handleUpdate}
      />
    </Field>
  )
}
