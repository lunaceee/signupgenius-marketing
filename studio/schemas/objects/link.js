import { FiLink2 } from 'react-icons/fi'

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
      name: 'linkStyles',
      type: 'styles'
    }
  ]
}