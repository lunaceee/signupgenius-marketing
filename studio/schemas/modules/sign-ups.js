import { FiCheckCircle } from 'react-icons/fi'

export default {
  title: 'Sign-ups',
  name: 'sampleSignups',
  type: 'object',
  icon: FiCheckCircle,
  fields: [
    {
      title: 'Insert sample Sign-ups',
      name: 'sampleSignups',
      type: 'array',
      of: [{ type: 'carouselItem'}]
    },
  ],
}
