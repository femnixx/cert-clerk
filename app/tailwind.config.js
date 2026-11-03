export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        border: 'var(--border)',
        focus: 'var(--focus)',
        compliant: 'var(--compliant)',
        expiring: 'var(--expiring)',
        expired: 'var(--expired)',
        missing: 'var(--missing)',
        review: 'var(--review)'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
