import { themes } from '@storybook/theming';
import '../src/styles/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#0c0c0c' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#fcfcfc' },
    darkClass: 'basicui-dark',
    lightClass: 'basicui-light',
    stylePreview: true,
    classTarget: 'html'
  }
}