import {
  FiHome,
} from 'react-icons/fi'

export default {
  title: 'Home',
  name: 'homePage',
  type: 'document',
  icon: FiHome,
  __experimental_actions: ['update', 'publish'], // disable for initial publish
  fields: [
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'grid' },
        { type: 'hero' },
        { type: 'marquee' },
        { type: 'dividerPhoto' }
      ]
    },
    {
      type: "showAds",
      name: "adsHomePage",
      title: "Turn on ads"
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page'
      }
    }
  }
}
