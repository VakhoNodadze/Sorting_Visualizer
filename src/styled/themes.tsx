import baseStyled, { ThemedStyledInterface } from 'styled-components';
export interface Fonts { 
  bold: string;
  regular: string; 
};

export interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  body: string;
  lg: string;
  xl: string;
};

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export interface ContainerMaxWidth {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export interface Colors {
  white: string;
  black: string;
  gray000: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  yello000: string;
  yellow100: string;
  yellow200: string;
  yellow300: string;
  yello400: string;
  pink: string;
  red000: string;
}

export interface Padding {
  tiny: string;
  mini: string;
  small: string;
  default: string;
  big: string;
  large: string;
  huge: string;
}

export interface Grid {
  containerMaxWidth: ContainerMaxWidth;
  gutterWidth: string;
  colCount: number;
}

export interface LineHeights {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  body: string;
  body2: string;
  caption: string;
}
  
export interface Spacing {
  [key: number]: string;
  noSpacing: number;
  tiny: number;
  mini: number;
  small: number;
  default: number;
  big: number;
  large: number;
  extraLarge: number;
  huge: number;
  extraHuge: number;
}

export interface Sizes {
  dwarf: string;
  tiny: string;
  small: string;
  default: string;
  big: string;
  large: string;
  huge: string;
}

export interface ThemeColors {
      primaryBg: string;
      secondaryBg: string;
      primaryTxt: string;
      activeTxt: string;
      primaryIcons: string;
}

export interface BorderRadius {
  tiny: string;
  small: string;
  default: string;
  big: string;
  circular: string;
  rounded: string;
}

export interface Margin {
  tiny: string;
  small: string;
  default: string;
  big: string;
  large: string;
  huge: string;
}
export interface ThemeProps {
  theme: {
      mode: string;
      breakpoints: Breakpoints;
      grid: Grid;
      spacing: Spacing;
      padding: Padding;
      sizes: Sizes;
      colors: Colors;
      themeColors: ThemeColors;
      fontSizes: FontSizes;
      fonts: Fonts;
      lineHeights: LineHeights;
      borderRadius: BorderRadius;
      margin: Margin;
  }
};

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

export const grid = {
  containerMaxWidth: {
    xs: 540,
    sm: 720,
    md: 960,
    lg: 1136,
    xl: 1236
  },
  gutterWidth: '16px',
  colCount: 12
};

export const spacing = {
  noSpacing: 0,
  tiny: 2,
  mini: 4,
  small: 6,
  default: 8,
  big: 16,
  large: 24,
  extraLarge: 32,
  huge: 38,
  extraHuge: 44
};

export const padding = {
  tiny: '4px',
  mini: '8px',
  small: '12px',
  default: '16px',
  big: '18px',
  large: '24px',
  huge: '44px'
};

export const sizes = {
  dwarf: '16px',
  tiny: '22px',
  small: '32px',
  default: '40px',
  big: '48px',
  large: '72px',
  huge: '128px'
};

export const fonts = {
  regular: '../resources/fonts/SFUIDisplayRegular.otf',
  bold: '../resources/fonts/SFUIDisplayBold.otf'
};

export const fontSizes = {
  xs: '0.714rem',
  sm: '0.857rem',
  md: '1rem',
  body: '16px',
  lg: '1.143rem',
  xl: '1.714rem'
};

export const lineHeights = {
  h1: '56px',
  h2: '40px',
  h3: '32px',
  h4: '24px',
  body: '24px',
  body2: '20px',
  caption: '16px'
};

export const borderRadius = {
  tiny: '2px',
  small: '4px',
  default: '6px',
  big: '8px',
  circular: '100%',
  rounded: '100rem'
};

export const margin = {
  tiny: '0.5rem',
  small: '0.75rem',
  default: '1rem',
  big: '1.5rem',
  large: '2rem',
  huge: '3rem'
};

const lightTheme = {
  mode: 'light',
  breakpoints: breakpoints,
  grid: grid,
  spacing: spacing,
  padding: padding,
  sizes: sizes,
  colors: {
    white: '#ffff',
    black: '#000',

    gray000: '#EAEAEA',
    gray100: '#E0E0E0',
    gray200: '#8D8E90',
    gray300: '#6F7070',
    gray400: '#707070',

    yello000: '#FFEBAA',
    yellow100: '#FFDA9E',
    yellow200: '#FDD28A',
    yellow300: '#FFBF71',
    yello400: '#FFB339',

    pink: '#6563FF',
    red000: '#DD727C'
  },
  themeColors: {
    primaryBg: '#FFFFFF',
    secondaryBg: '#EAEAEA',
    primaryTxt: '#707070',
    activeTxt: '#0000',
    primaryIcons: '#6F7070'
  },
  fontSizes: fontSizes,
  fonts: fonts,
  lineHeights: lineHeights,
  borderRadius: borderRadius,
  margin: margin
}; 

const darkTheme = {
  mode: 'dark',
  breakpoints: breakpoints,
  grid: grid,
  spacing: spacing,
  padding: padding,
  sizes: sizes,
  colors: {
    white: '#ffff',
    black: '#000',

    gray000: '#EAEAEA',
    gray100: '#E0E0E0',
    gray200: '#8D8E90',
    gray300: '#6F7070',
    gray400: '#707070',

    yello000: '#FFEBAA',
    yellow100: '#FFDA9E',
    yellow200: '#FDD28A',
    yellow300: '#FFBF71',
    yello400: '#FFB339',

    pink: '#6563FF',
    red000: '#DD727C'
  },
  themeColors: {
    primaryBg: '#22252A',
    secondaryBg: '#272B2F',
    primaryTxt: '#919294',
    activeTxt: '#FFFFFF',
    primaryIcons: '#8D8E90'
  },
  fontSizes: fontSizes,
  fonts: fonts,
  lineHeights: lineHeights,
  borderRadius: borderRadius,
  margin: margin
}; 

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export { lightTheme, darkTheme };