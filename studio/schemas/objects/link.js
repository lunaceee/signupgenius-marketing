
import ConditionalFields from '../../components/conditional-field'
import {FiLink2} from 'react-icons/fi'

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  icon: FiLink2,
  fields: [
    {
      title: '(A) Internal Page',
      name: 'page',
      type: 'reference',
      to: [
        { type: 'page' },
      ]
    },
    {
      title: '(B) External URL',
      name: 'url',
      type: 'url'
    },
    {
      title: 'Style as Button?',
      name: 'isButton',
      type: 'boolean'
    },
    {
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
  ]
}