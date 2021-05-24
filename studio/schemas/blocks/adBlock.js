export default {
  title: 'Ad block',
  name: 'adBlock',
  type: 'object',
  fields: [
    { type: "string", name: 'adBlockText', title: 'Sidebar ad banner' },
    {
      type: "string", name: "primaryCTAlabel", title: "Primary CTA label"
    },
    { type: "link", name: 'primaryCTA' },
    {
      type: "string", name: "secondaryCTAlabel", title: "Secondary CTA label"
    },
    { type: "link", name: 'secondaryCTA' },
  ]
}