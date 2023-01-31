export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'White',
    values: [
      { name: 'Dark grey', value: '#AEAEAE' },
      { name: 'Light', value: '#E9EAEC' },
      { name: 'White', value: '#fff' }
    ]
  }
}

export const decorators = [(Story) => <Story />]
