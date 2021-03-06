import {
  Header1,
  Header2,
  Header3,
  Header4,
  Button
} from '../../components/block-renders'

export default {
  title: 'Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Paragraph', value: 'normal' },
        {
          title: 'H1 (use once)',
          value: 'h1',
          blockEditor: {
            render: Header1
          }
        },
        {
          title: 'H1 (mimic)',
          value: 'h1mock',
          blockEditor: {
            render: Header1
          }
        },
        {
          title: 'H2',
          value: 'h2',
          blockEditor: {
            render: Header2
          }
        },
        {
          title: 'H2 (mimic)',
          value: 'h2mock',
          blockEditor: {
            render: Header2
          }
        },
        {
          title: 'H3',
          value: 'h3',
          blockEditor: {
            render: Header3
          }
        },
        {
          title: 'H3 (mimic)',
          value: 'h3mock',
          blockEditor: {
            render: Header3
          }
        },
        {
          title: 'H4',
          value: 'h4',
          blockEditor: {
            render: Header4
          }
        },
        {
          title: 'H4 (mimic)',
          value: 'h4mock',
          blockEditor: {
            render: Header4
          }
        }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }, {title: 'Number', value: 'number'}],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            blockEditor: {
              render: Button
            },
            fields: [
              {
                title: '(A) Internal Page',
                name: 'page',
                type: 'reference',
                to: [
                  { type: 'page' },
                ]
              },
              {
                title: '(B) External URL',
                name: 'url',
                type: 'url'
              },
              {
                title: 'Style as Button?',
                name: 'isButton',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    }
  ]
}
