import plugin from 'tailwindcss/plugin'

export const TypographyPlugin = plugin(({ addBase }) => {
  addBase({
    '.text-button-xl': {
      lineHeight: '115%',
      fontSize: 'var(--text-button-fontsize-xl)',
      letterSpacing: 'var(--text-button-letterspacing-label)',
      fontWeight: 'var(--text-button-fontweight-label)'
    },

    '.text-button-lg': {
      lineHeight: '115%',
      fontSize: 'var(--text-button-fontsize-lg)',
      letterSpacing: 'var(--text-button-letterspacing-label)',
      fontWeight: 'var(--text-button-fontweight-label)'
    },

    '.text-button-md': {
      lineHeight: '115%',
      fontSize: 'var(--text-button-fontsize-md)',
      letterSpacing: 'var(--text-button-letterspacing-label)',
      fontWeight: 'var(--text-button-fontweight-label)'
    },

    '.text-button-sm': {
      lineHeight: '115%',
      fontSize: 'var(--text-button-fontsize-sm)',
      letterSpacing: 'var(--text-button-letterspacing-label)',
      fontWeight: 'var(--text-button-fontweight-label)'
    },

    '.text-button-xs': {
      lineHeight: 'var(--text-button-lineheight-slab)',
      fontSize: 'var(--text-button-fontsize-xs)',
      letterSpacing: 'var(--text-button-letterspacing-label)',
      fontWeight: 'var(--text-button-fontweight-label)'
    },

    '.text-button-caption': {
      lineHeight: '115%',
      fontSize: 'var(--text-button-fontsize-caption)',
      letterSpacing: 'var(--text-button-letterspacing-caption)',
      fontWeight: 'var(--text-button-fontweight-caption)'
    }
  })
})
