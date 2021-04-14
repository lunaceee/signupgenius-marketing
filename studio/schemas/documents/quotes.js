import { FiFileText } from 'react-icons/fi'

export default {
  title: 'Quotes',
  name: 'quotes',
  type: 'document',
  icon: FiFileText,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'simplePortableText',
    }
  ]
}