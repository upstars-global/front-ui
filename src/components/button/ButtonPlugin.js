const plugin = require('tailwindcss/plugin')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ButtonSizes, ButtonTypes, ButtonColors, ButtonVariants } = require('./Button.types.ts')

const states = ['', 'hover', 'active']
function generateVariantStyles(variant, color, stylesPerState) {
  return states.reduce((acc, state) => {
    const selector = state
      ? `.ui-button:${state} .ui-button__content.${variant}.${color}`
      : `.ui-button .ui-button__content.${variant}.${color}`

    acc[selector] = Object.entries(stylesPerState).reduce((styleObj, [key, value]) => {
      styleObj[key] = typeof value === 'function' ? value(variant, color, state) : value
      return styleObj
    }, {})

    return acc
  }, {})
}
function generateTypeSizeStyles(type, size, styles) {
  const selector = `.ui-button__content.${type}.${size}`

  return {
    [selector]: Object.entries(styles).reduce((styleObj, [key, value]) => {
      styleObj[key] = typeof value === 'function' ? value(type, size) : value
      return styleObj
    }, {})
  }
}

function getColorsStyles() {
  return Object.values(ButtonColors).reduce((acc, color) => {
    const colorTemplate = (variant, color, state) =>
      `var(--button-color-${variant}-${color}${state ? `-${state}` : ''})`
    const colorBasic = (variant, color, state) => `var(--button-color-basic-${color}${state ? `-${state}` : ''})`
    const backgroundTemplate = (variant, color, state) =>
      `var(--button-bg-${variant}-${color}${state ? `-${state}` : ''})`
    const map = {
      [ButtonVariants.filled]: {
        background: backgroundTemplate,
        color: colorTemplate
      },
      [ButtonVariants.outline]: {
        'border-color': (variant, color, state) =>
          `var(--button-border_color-${variant}-${color}${state ? `-${state}` : ''})`,
        background: backgroundTemplate,
        color: colorTemplate
      },
      [ButtonVariants.soft]: {
        background: backgroundTemplate,
        color: colorBasic
      },
      [ButtonVariants.ghost]: {
        background: backgroundTemplate,
        color: colorBasic
      }
    }

    Object.entries(map).forEach(([variant, styles]) => {
      Object.assign(
        acc,
        generateVariantStyles(variant, color, styles, `.ui-button__icon-wrapper.${ButtonTypes.action}`)
      )
    })

    return acc
  }, {})
}

function getSizeStyles() {
  return Object.values(ButtonSizes).reduce((acc, size) => {
    const map = {
      [ButtonTypes.standard]: {
        height: `var(--button-height-standard-${size})`,
        minWidth: `var(--button-minwidth-standard-${size})`,
        gap: `var(--button-gap-standard-${size})`,
        padding: `0 var(--button-padding-x-standard-${size})`,
        borderRadius: `var(--button-radius-standard-${size})`
      },
      [ButtonTypes.icon]: {
        height: `var(--button-height-standard-${size})`,
        width: `var(--button-height-standard-${size})`,
        borderRadius: `var(--button-radius-icon-${size})`
      },
      [ButtonTypes.caption]: {
        height: `var(--button-height-caption-${size})`,
        padding: `0 var(--button-padding-x-caption-${size})`,
        borderRadius: `var(--button-radius-caption-${size})`,
        gap: `var(--button-gap-caption-${size})`
      },
      [ButtonTypes.slab]: {
        height: `var(--button-height-slab-${size})`,
        borderRadius: `var(--button-radius-slab-sm)`,
        minWidth: `var(--button-minwidth-slab-${size})`,
        padding: `0 var(--button-padding-x-slab-${size})`,
        gap: `var(--button-gap-slab-${size})`
      },
      [ButtonTypes.action]: {
        height: `var(--button-height-action-${size})`,
        width: `var(--button-height-action-${size})`,
        marginBottom: `var(--button-gap-action-${size})`,
        borderRadius: `var(--button-radius-action-${size})`
      }
    }

    Object.entries(map).forEach(([type, styles]) => {
      Object.assign(acc, generateTypeSizeStyles(type, size, styles))
    })

    return acc
  }, {})
}

export const btnPlugin = plugin(({ addComponents }) => {
  addComponents({
    '.ui-button .ui-button__content': {
      transitionProperty: 'var(--button-transition-property)',
      transitionDuration: 'var(--button-transition-duration)'
    },

    '.disabled .ui-button__content': {
      filter: 'var(--effects-filter-disable)'
    },

    '.ui-button__content.outline': {
      'border-width': 'var(--button-borderwidth-outline)',
      'border-style': 'solid'
    },

    '.ui-button.action .label-text': {
      color: 'var(--button-color-action-label)'
    },

    ...getColorsStyles(),
    ...getSizeStyles()
  })
})
