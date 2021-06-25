import React from 'react'
import { AnimatePresence, m } from 'framer-motion'

import Photo from '../components/photo'

const thumbAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
      when: 'afterChildren',
    },
  },
}

const FeatureThumbnail = ({ thumbnail }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <m.div
        key="articleThumbnail"
        initial="hide"
        animate="show"
        exit="hide"
        variants={thumbAnim}
        className="feature-card--photo"
      >
        <Photo
          photo={thumbnail}
          srcsetSizes={[400, 800, 1000]}
          sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
          width={1200}
          className="is-default"
        />
      </m.div>
    </AnimatePresence>
  )
}

export default FeatureThumbnail
