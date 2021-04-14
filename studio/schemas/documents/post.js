import { FiFile } from 'react-icons/fi'

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: FiFile,
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
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    },
    {
      title: 'Tags',
      name: 'blogPostTags',
      type: 'array',
      of: [{
        type: 'reference', to: { type: 'tag'}
      }]
    },
    {
      title: 'Content',
      name: 'content',
      type: 'complexPortableText'
    },
    {
      title: 'Related articles',
      name: 'relatedArticles',
      type: 'array',
      of: [
        {type: 'reference', to: { type: 'post'}}
      ]
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
