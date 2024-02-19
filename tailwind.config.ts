import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const MyTheme = {
  colors: {
    // primary: {
    //   DEFAULT: '#3E7BFA',
    //   '50': '#fff7ed',
    //   '100': '#ffeed4',
    //   '200': '#ffd9a8',
    //   '300': '#ffbd71',
    //   '400': '#ff9638',
    //   '500': '#fe7711',
    //   '600': '#ef5c07',
    //   '700': '#c64308',
    //   '800': '#9d360f',
    //   '900': '#7e2e10',
    // },

    primary: {
      DEFAULT: '#3E7BFA',
      '50': '#F1F5FF',
      '100': '#DDE8FE',
      '200': '#B5CDFD',
      '300': '#8EB1FC',
      '400': '#6696FB',
      '500': '#3E7BFA',
      '600': '#0756F9',
      '700': '#0543C3',
      '800': '#04308C',
      '900': '#021D55',
    },

    // gray: {
    //   DEFAULT: '#666666',
    //   '50': '#f6f6f6',
    //   '100': '#e7e7e7',
    //   '200': '#d1d1d1',
    //   '300': '#b0b0b0',
    //   '400': '#888888',
    //   '500': '#666666',
    //   '600': '#5d5d5d',
    //   '700': '#4f4f4f',
    //   '800': '#454545',
    //   '900': '#3d3d3d',
    //   '950': '#262626',
    // },
  },
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: MyTheme.colors.primary,
        // dark: MyTheme.colors.gray,
        background: '#ffffff',
        gray: '#c7c9d9',
        dark: '#28293D',
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      rotate: {
        '5': '5deg',
      },
      // fontSize: {
      //   sm: '0.8rem',
      //   base: '1rem',
      //   xl: '1.25rem',
      //   '2xl': '1.563rem',
      //   '3xl': '1.953rem',
      //   '4xl': '2.441rem',
      //   '5xl': '3.052rem',
      // },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
}
