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
          // { title: 'Default', value: '' },
          { title: 'Primary', value: 'is-primary' },
          { title: 'Secondary', value: 'is-secondary' },
          { title: 'Tertiary', value: 'is-tertiary' },
          { title: 'Ghost', value: 'is-ghost' },
          { title: 'Disabled', value: 'is-disabled' }
        ],
        layout: 'radio'
      }
    },
    {
      title: 'Size',
      name: 'buttonSize',
      type: 'string',
      options: {
        list: [
          { title: 'Large', value: 'is-large' },
          { title: 'Medium', value: 'is-medium' },
          { title: 'Small', value: 'is-small' },
          { title: 'Fullwidth', value: 'is-fullwidth' },
        ],
        layout: 'radio'
      }
    }
  ],
  options: {
    condition: (document, context) => context().isButton === true
  }
}