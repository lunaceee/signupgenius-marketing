import { FiUser } from 'react-icons/fi'

export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  icon: FiUser,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Profile picture',
      name: 'profilePicture',
      type: 'figure',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'simplePortableText'
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string'
    },
    {
      title: 'Department',
      name: 'department',
      type: 'string'
    },
    {
      title: 'Is active?',
      description: 'Is the person still working at Lumaverse?',
      name: 'isActive',
      type: 'boolean',
      options: {
        layout: 'radio'
      }
    },
    {
      title: 'Is employee?',
      description: 'Is the person an employee of Lumaverse?',
      name: 'isEmployee',
      type: 'boolean',
      options: {
        layout: 'radio'
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)'
      }
    }
  }
}
