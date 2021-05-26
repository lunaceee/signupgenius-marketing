import { FiFile } from 'react-icons/fi'

export default {
  title: 'Downloadable Page',
  name: 'downloadablePage',
  type: 'document',
  icon: FiFile,
  fields: [
    {
      name: 'fileUploadNote',
      type: 'note',
      options: {
        headline: 'Info',
        message: 'Information about downloadable files',
        tone: 'positive'
      }
    },
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
      title: 'File uploads',
      name: 'fileUploads',
      type: 'array',
      of: [
        { type: 'downloadable' }
      ]
    },
  ]
}