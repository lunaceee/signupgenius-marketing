export default {
  title: 'Items',
  name: 'items',
  type: 'object',
  validation: Rule => Rule.min(1).required(),
  fields: [
    { name: 'simpleItem', type: 'simple' },
    { name: "marqueeFigure", type: 'figure' }
  ],
}