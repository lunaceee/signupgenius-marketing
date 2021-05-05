import React from "react"
import dynamic from "next/dynamic"

const Grid = dynamic(() => import('./grid'))
const Hero = dynamic(() => import('./hero'))

export const Module = ({
  module,
}) => {
  const type = module._type

  switch (type) {
    case 'grid':
      return <Grid data={module} />
    case 'hero':
      return <Hero data={module} />
    default:
      return null
  }
}