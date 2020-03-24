import React from 'react'
import clsx from 'clsx'

import { FormRegistration } from '../../global'

interface FormLabelGroupProps {
  id: string
  label: string
  validation?: Record<string, any>
}

const resolve = (obj: any, path: any) => {
  path = path.split('.')
  let current = obj
  while (path.length) {
    if (typeof current !== 'object') return undefined
    current = current[path.shift()]
  }
  return current
}

const FormLabelGroup: React.FC<FormLabelGroupProps & FormRegistration> = ({
  id,
  label,
  register,
  errors,
  validation = { required: false }
}) => {
  const hasError = resolve(errors || {}, id)
  debugger
  return (
    <div className="form-label-group">
      <input
        type="text"
        className={clsx('form-control form-control-flush', {
          'is-invalid': hasError
        })}
        id={id}
        name={id}
        placeholder={label}
        ref={register(validation)}
      />
      <label htmlFor={id}>{label}</label>
      {hasError && <div className="invalid-feedback">{`${label} is required`}</div>}
    </div>
  )
}

export { FormLabelGroup }
