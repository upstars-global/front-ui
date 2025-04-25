import plugin from 'tailwindcss/plugin'

export const checkboxPlugin = plugin(({ addComponents }) => {
  addComponents({
    '.ui-checkbox': {
      gap: 'var(--checkbox-gap)',
      padding: 'var(--checkbox-padding)',
      transition: 'var(--checkbox-transition)'
    },
    '.ui-checkbox__inner': {
      color: 'var(--checkbox-color)',
      fontSize: 'var(--checkbox-font-size)',
      lineHeight: 'var(--checkbox-line-height)',
      gap: 'var(--checkbox-inner-gap)',
      padding: 'var(--checkbox-inner-padding)',
      transition: 'var(--checkbox-transition)'
    },
    '.ui-checkbox__inner:hover': {
      '--checkbox-color': 'var(--checkbox-hovered-color)',
      '--checkbox-background-color': 'var(--checkbox-hovered-background-color)'
    },
    '.ui-checkbox__checkmark': {
      color: 'var(--checkbox-checkmark-color)',
      borderColor: 'var(--checkbox-border-color)',
      borderWidth: 'var(--checkbox-border-width)',
      borderRadius: 'var(--checkbox-border-radius)',
      backgroundColor: 'var(--checkbox-background-color)',
      transition: 'var(--checkbox-transition)'
    },
    '.ui-checkbox.is-checked': {
      '--checkbox-color': 'var(--checkbox-checked-color)'
    },
    '.ui-checkbox.is-checked .ui-checkbox__checkmark': {
      backgroundColor: 'var(--checkbox-checked-background-color)'
    },
    '.ui-checkbox.is-disabled': {
      opacity: 'var(--checkbox-disabled-opacity)'
    },
    '.ui-checkbox.is-disabled .ui-checkbox__inner:hover': {
      color: 'var(--checkbox-disabled-color)',
      '--checkbox-background-color': 'var(--checkbox-disabled-background-color)'
    },
    '.ui-checkbox.is-invalid .ui-checkbox__checkmark': {
      '--checkbox-border-color': 'var(--checkbox-error-border-color)'
    },
    '.ui-checkbox__error-message': {
      color: 'var(--checkbox-error-message-color)',
      fontSize: 'var(--checkbox-error-message-font-size)',
      gap: 'var(--checkbox-error-message-gap)',
      padding: 'var(--checkbox-error-message-padding)'
    },
    '.ui-checkbox__required-message': {
      color: 'var(--checkbox-required-message-color)',
      fontSize: 'var(--checkbox-required-message-font-size)',
      gap: 'var(--checkbox-required-message-gap)',
      padding: 'var(--checkbox-required-message-padding)'
    }
  })
})
