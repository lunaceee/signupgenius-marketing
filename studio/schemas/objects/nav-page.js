export default {
  title: 'Page',
  name: 'navPage',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text'
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [
        { type: 'homePage' },
        { type: 'page' },
        { type: 'landingPage' },
        { type: 'downloadablePage' }
      ]
    }
  ]
}
