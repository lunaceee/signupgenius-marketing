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
    }
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
