export const themes = {
  light: {
    type: 'light',
    fontFamily: {
      default: 'SFUIDisplay-Regular, Roboto, sans-serif',
      bold: 'SFUIDisplay-Bold, Roboto, sans-serif'
    },
    fontSize: {
      tiny: '11px',
      mini: '12px',
      small: '13px',
      default: '14px',
      big: '16px',
      large: '18px'
    },
    color: {
      white: '#fff',
      whiteSecondary: 'rgba(255, 255, 255, .54)',
      default: 'rgba(0, 0, 0, .54)',
      primary: '#2675fe',
      text: 'rgba(0, 0, 0, .74)',
      secondary: 'rgba(0, 0, 0, .54)',
      placeholder: 'rgba(0, 0, 0, .34)',
      disabled: 'rgba(0, 0, 0, .04)',
      border: 'rgba(0, 0, 0, .15)',
      borderHover: 'rgba(0, 0, 0, .35)',
      elementBg: '#fff',
      elementBgSecondary: 'rgba(0,0,0, .034)',
      elementHover: 'rgba(0, 0, 0, .06)',
      danger: '#ea3d53',
      info: 'rgba(250, 120, 16, 1)',
      success: 'rgba(0, 217, 176, 1)'
    },
    palette: {
      transparent: {
        200: 'rgba(0, 0, 0, 0)',
        300: 'rgba(0, 0, 0, 0.064)',
        500: 'rgba(0, 0, 0, 0)',
        1000: 'rgba(0, 0, 0, 0.54)'
      },
      default: {
        200: 'rgba(0, 0, 0, .034)',
        300: 'rgba(0, 0, 0, .084)',
        500: 'rgba(0, 0, 0, .34)',
        1000: 'rgba(0, 0, 0, .44)'
      },
      inverted: {
        200: 'rgba(255, 255, 255, .034)',
        500: 'rgba(255, 255, 255, .34)',
        700: 'rgba(255, 255, 255, .54)',
        1000: 'rgba(255, 255, 255, 1)'
      },
      secondary: {
        200: 'rgba(0, 0, 0, .034)',
        300: 'rgba(0, 0, 0, .084)',
        500: 'rgba(0, 0, 0, .34)',
        1000: 'rgba(0, 0, 0, 1)'
      },
      primary: {
        200: 'rgba(38, 117, 254, .064)',
        500: 'rgba(38, 117, 254, .54)',
        800: 'rgba(38, 117, 254, .84)',
        900: 'rgba(38, 117, 254, .94)',
        1000: 'rgba(38, 117, 254, 1)'
      },
      danger: {
        200: 'rgba(234, 61, 83, .064)',
        500: 'rgba(234, 61, 83, .54)',
        1000: 'rgba(234, 61, 83, 1)'
      },
      info: {
        200: 'rgba(250, 120, 16, .064)',
        500: 'rgba(250, 120, 16, .54)',
        1000: 'rgba(250, 120, 16, 1)'
      },
      success: {
        200: 'rgba(0, 217, 176, .64)',
        500: 'rgba(0, 217, 176, .54)',
        1000: 'rgba(0, 217, 176, 1)'
      }
    },
    avatarSize: {
      tiny: '28px',
      small: '44px',
      default: '64px',
      large: '84px',
      big: '120px',
      huge: '154px'
    },
    imageSize: {
      large: '600px',
      fluid: '100%'
    },
    elementSize: {
      mini: '32px',
      small: '38px',
      default: '50px'
    },
    borderRadius: {
      tiny: '2px',
      small: '4px',
      default: '6px',
      big: '8px',
      circular: '100%',
      rounded: '100rem'
    },
    boxShadow: {
      default: '0 2px 2px rgba(0, 0, 0, 0.06)',
      primary: '0 1px 3px rgba(0, 0, 0, 0.24)'
    },
    paddingVertical: {
      tiny: '4px',
      mini: '8px',
      small: '12px',
      default: '16px',
      big: '18px',
      large: '24px',
      huge: '44px'
    },
    paddingHorizontal: {
      micro: '12px',
      tiny: '16px',
      mini: '18px',
      small: '22px',
      default: '24px',
      big: '34px',
      large: '44px',
      huge: '64px'
    },
    marginHorizontal: {
      tiny: '2px',
      default: '16px'
    },
    spacing: {
      0: 0,
      1: 2,
      2: 4,
      3: 6,
      4: 8,
      5: 10,
      6: 12,
      7: 14,
      8: 16,
      9: 18,
      10: 20,
      11: 22,
      12: 24,
      13: 26,
      14: 28,
      15: 30,
      16: 32,
      17: 34
    },
    animation: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      default: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    }
  }
};

export const defaultTheme = 'light';
