export default {
  title: 'Simple Text (child)',
  name: 'simple',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare({ text }) {
      return {
        title: text
      }
    }
  }
}