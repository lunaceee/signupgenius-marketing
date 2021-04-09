import { FiFile } from 'react-icons/fi'

export default {
  title: 'Carousel item',
  name: 'carouselItem',
  type: 'object',
  icon: FiFile,
  fields: [
    {
      title: 'Photo',
      name: 'photo',
      type: 'figure'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    }
  ],
}
