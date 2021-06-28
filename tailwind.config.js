module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: {
    content: [
      './components/**/*.js',
      './lib/**/*.js',
      './modules/**/*.js',
      './pages/**/*.js',
    ],
    options: {
      safelist: [
        /^grid-cols-/,
        /^xs:grid-cols-/,
        /^sm:grid-cols-/,
        /^md:grid-cols-/,
        /^lg:grid-cols-/,
        /^xl:grid-cols-/,

        /^col-span-/,
        /^xs:col-span-/,
        /^sm:col-span-/,
        /^md:col-span-/,
        /^lg:col-span-/,
        /^xl:col-span-/,

        /^col-start-/,
        /^xs:col-start-/,
        /^sm:col-start-/,
        /^md:col-start-/,
        /^lg:col-start-/,
        /^xl:col-start-/,

        /^justify-self-/,
        /^xs:justify-self-/,
        /^sm:justify-self-/,
        /^md:justify-self-/,
        /^lg:justify-self-/,
        /^xl:justify-self-/,

        /^self-/,
        /^xs:self-/,
        /^sm:self-/,
        /^md:self-/,
        /^lg:self-/,
        /^xl:self-/,

        /^max-w-/,
        /^text-/,
      ],
    },
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryBg: 'var(--carrot-orange)',
      primaryBgHover: 'var(--supernova)',
      primaryText: 'var(--black)',
      primaryInvertedBg: 'var(--transparent)',
      primaryInvertedText: 'var(--carror-orange)',
      primaryInvertedBorder: 'var(--brown-pod)',
      white: 'var(--white)',
      black: 'var(--black)',
      pageBG: 'var(--pageBG)',
      pageText: 'var(--pageText)',
      infoText: 'var(--sherpa-blue)',
      infoBg: 'var(--regent-st-blue)',
      errorBg: 'var(--persian-red)',
      errorText: 'var(--ghost-white)',
      errorBgInverted: 'var(--ghost-white)',
      errorTextInverted: 'var(--persian-red)',
      successBg: 'var(--celery)',
      successText: 'var(--nero)',
      warningBg: 'var(--Calamansi)',
      warningText: 'var(--brown-pod)',
      disabled: 'var(--gainsboro)'
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '940px',
      lg: '1200px',
      xl: '1600px',
    },
    fontFamily: {
      sans: 'Lato, Arial, sans-serif'
    },
    extend: {
      fontFamily: {
        inherit: 'inherit'
      },
      fontSize: {
        xxs: '.625rem',
      },
      zIndex: {
        '-1': '-10',
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
      },
      padding: {
        '4.5': '18px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
