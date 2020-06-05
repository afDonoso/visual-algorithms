import { useState } from 'react'

/**
 * Hook created to manage forms
 * @param {String} initialValue
 * @param {(value) => void} onChangeAction
 */
export const useInput = (initialValue, onChangeAction) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value)
        onChangeAction(event.target.value)
      },
    },
  }
}
