import { FiSend } from 'react-icons/fi'

export default {
  title: 'Newsletter Form',
  name: 'newsletter',
  type: 'object',
  icon: FiSend,
  fields: [
    {
      name: 'apiNote',
      type: 'note',
      options: {
        headline: 'Gotcha',
        message:
          'You must have a xxx Private API Key added to your Environment Variables for this form to work properly.',
        tone: 'caution'
      }
    },
    {
      title: 'API key',
      name: 'apiID',
      type: 'string',
      description: 'Your API key to subscribe emails to',
      validation: Rule => Rule.required()
    },
    {
      title: 'Submit Text',
      name: 'submit',
      type: 'string'
    },
    {
      title: 'Success Message',
      name: 'successMsg',
      type: 'complexPortableText'
    },
    {
      title: 'Error Message',
      name: 'errorMsg',
      type: 'complexPortableText'
    },
    {
      title: 'Agreement Statement',
      name: 'terms',
      type: 'simplePortableText'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Newsletter Form'
      }
    }
  }
}
