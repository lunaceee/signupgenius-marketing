import {FiAperture} from 'react-icons/fi'

export default {
  title: 'Carousel',
  name: 'carousel',
  type: 'object',
  icon: FiAperture,
  fields: [
    {
      title: 'Carousel Items',
      name: 'carouselItems',
      type: 'array',
      of: [{ type: 'carouselItem'}]
    },
  ]
}