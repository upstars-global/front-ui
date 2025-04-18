const plugin = require('tailwindcss/plugin')

export const TypographyPlugin = plugin(({ addBase }) => {
  addBase({
    '.text-button-xl': {
      lineHeight: '100%',
      fontSize: 'var(--text-button-font_size-xl)',
      letterSpacing: 'var(--text-button-letter_spacing-label)',
      fontWeight: 'var(--text-button-font_weight-label)'
    },

    '.text-button-lg': {
      lineHeight: '100%',
      fontSize: 'var(--text-button-font_size-lg)',
      letterSpacing: 'var(--text-button-letter_spacing-label)',
      fontWeight: 'var(--text-button-font_weight-label)'
    },

    '.text-button-md': {
      lineHeight: '100%',
      fontSize: 'var(--text-button-font_size-md)',
      letterSpacing: 'var(--text-button-letter_spacing-label)',
      fontWeight: 'var(--text-button-font_weight-label)'
    },

    '.text-button-sm': {
      lineHeight: '100%',
      fontSize: 'var(--text-button-font_size-sm)',
      letterSpacing: 'var(--text-button-letter_spacing-label)',
      fontWeight: 'var(--text-button-font_weight-label)'
    },

    '.text-button-xs': {
      lineHeight: '100%',
      fontSize: 'var(--text-button-font_size-xs)',
      letterSpacing: 'var(--text-button-letter_spacing-label)',
      fontWeight: 'var(--text-button-font_weight-label)'
    },

    '.text-button-caption': {
      lineHeight: 'var(--text-button-line_height-slab)',
      fontSize: 'var(--text-button-font_size-caption)',
      letterSpacing: 'var(--text-button-letter_spacing-caption)',
      fontWeight: 'var(--text-button-font_weight-caption)'
    }
  })
})
