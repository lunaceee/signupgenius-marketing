import React, { useState } from 'react'
import { m } from 'framer-motion'
import Link from 'next/link'
import cx from 'classnames'

import FeatureThumbnail from './feature-thumbnail'

const itemAnim = {
  initial: {
    opacity: 0,
  },
  show: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05 + 0.4,
      duration: 0.3,
      ease: 'linear',
    },
  }),
  hide: (i) => ({
    opacity: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'linear',
    },
  }),
}

const FeatureCard = ({
  article,
  index,
  hasVisuals,
  className,
  onClick,
}) => {
  if (!article) return null

  return (
    <m.div
      initial="initial"
      animate="show"
      exit="hide"
      custom={index}
      variants={itemAnim}
      className={cx('feature-card', className)}
    >
      {hasVisuals && (
        <div className="feature-card--visuals">
          {/* Show Thumbnail */}
          <div className="feature-card--thumb">
            <FeatureThumbnail
              thumbnail={article.thumbnail}
            />
          </div>
        </div>
      )}

      <div className="feature-card--details">
        <div className="feature-card--header">
          <h2 className="feature-card--title">
            <Link
              href={`/post/${article.slug}`}
              scroll={false}
            >
              <a className="feature-card--link" onClick={onClick}>
                {article.title}
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </m.div>
  )
}

export default FeatureCard
