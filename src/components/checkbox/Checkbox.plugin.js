import plugin from 'tailwindcss/plugin'

export const checkboxPlugin = plugin(({ addComponents }) => {
  addComponents({
    '.ui-checkbox__inner': {
      color: 'var(--checkbox-color)',
      fontSize: 'var(--checkbox-font-size)'
    },
    '.ui-checkbox__inner:hover': {
      '--checkbox-color': 'var(--checkbox-hovered-color)'
    },
    '.ui-checkbox__checkmark': {
      color: 'var(--checkbox-checkmark-color)',
      borderColor: 'var(--checkbox-border-color)',
      borderWidth: 'var(--checkbox-border-width)',
      borderRadius: 'var(--checkbox-border-radius)'
    },
    '.ui-checkbox.is-checked': {
      '--checkbox-color': 'var(--checkbox-checked-color)'
    },
    '.ui-checkbox:focus .ui-checkbox__checkmark::after': {
      borderColor: 'var(--checkbox-border-color)',
      borderWidth: 'var(--checkbox-border-width)',
      borderRadius: 'var(--checkbox-border-radius)'
    },
    '.ui-checkbox.is-checked .ui-checkbox__checkmark': {
      backgroundColor: 'var(--checkbox-checked-background-color)'
    },
    '.ui-checkbox.is-disabled': {
      opacity: 'var(--checkbox-disabled-opacity)'
    },
    '.ui-checkbox.is-invalid .ui-checkbox__checkmark': {
      '--checkbox-border-color': 'var(--checkbox-error-border-color)'
    },
    '.ui-checkbox__error-message': {
      color: 'var(--checkbox-error-message-color)',
      fontSize: 'var(--checkbox-error-message-font-size)'
    },
    '.ui-checkbox__required-message': {
      color: 'var(--checkbox-required-message-color)',
      fontSize: 'var(--checkbox-required-message-font-size)'
    }
  })
})
