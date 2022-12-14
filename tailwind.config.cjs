module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
          '03': 'rgba(0, 0, 0, 0.03)',
          '08': 'var(--tw-gray-08)',
          10: 'var(--tw-gray-10)',
          20: 'var(--tw-gray-20)',
          50: 'var(--tw-gray-50)',
          60: 'var(--tw-gray-60)',
          80: 'var(--tw-gray-80)',
          850: '#171717',
        },
        'black-1': '#111',
        'brand-blue': '#115EF5',
      },
      backgroundImage: {
        'work-point': "url('/images/work_bg_point.png')",
      },
      screens: {
        lg: '1320px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
