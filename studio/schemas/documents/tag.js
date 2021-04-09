import { FiTag } from 'react-icons/fi'

export default {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  icon: FiTag,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text (required)',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'required',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 30,
      }
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      description: 'Add context to the tag'
    }
  ]
}