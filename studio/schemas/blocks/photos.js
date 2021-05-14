import ConditionalFields from '../../components/conditional-field'

export default {
  name: 'photos',
  title: 'Photos',
  type: 'object',
  inputComponent: ConditionalFields,
  fields: [
    {
      title: 'Background Photo (mobile)',
      name: 'mobilePhoto',
      type: 'figure'
    },
    {
      title: 'Background Photo (desktop)',
      name: 'desktopPhoto',
      type: 'figure'
    }
  ],
  options: {
    condition: (document, context) => context().bgType === 'photo'
  }
}