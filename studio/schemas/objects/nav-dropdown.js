import { FiAlertCircle } from 'react-icons/fi'

export default {
  title: 'Dropdown',
  name: 'navDropdown',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Text to Display'
    },
    {
      title: 'Dropdown Items',
      name: 'dropdownItems',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }, { type: 'navDropdown' }]
    },
    {
      name: 'featuredNote',
      type: 'note',
      options: {
        icon: FiAlertCircle,
        headline: 'Gotcha',
        message: `Featured articles are only for menus that appear in desktop "mega-navs".`,
        tone: 'caution'
      }
    },
    {
      title: 'Featured Articles',
      name: 'featured',
      type: 'array',
      of: [
        {
          title: 'Article',
          type: 'reference',
          to: [{ type: 'post' }, { type: 'landingPage' }]
        }
      ],
      validation: Rule => Rule.unique().max(2)
    }
  ]
}
