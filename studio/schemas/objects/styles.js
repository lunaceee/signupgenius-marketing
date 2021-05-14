import ConditionalFields from '../../components/conditional-field'

export default {
  name: 'styles',
  type: 'object',
  inputComponent: ConditionalFields,
  fields: [
    {
      title: 'Button Style',
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: '' },
          { title: 'Primary', value: 'is-primary' },
          { title: 'White', value: 'is-white' }
        ],
        layout: 'radio'
      }
    },
    {
      title: 'Large Size',
      name: 'isLarge',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    },
    {
      title: 'Full Width',
      name: 'isBlock',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    }
  ],
  options: {
    condition: (document, context) => context().isButton === true
  }
}