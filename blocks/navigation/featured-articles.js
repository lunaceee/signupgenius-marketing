import React from 'react'
import FeatureCard from "../../components/feature-card";

const FeaturedArticles = ({ articles, onClick }) => {
  if (!articles) return null

  return (
    <>
      {
        articles.map((article, key) => {
          return (
            <FeatureCard
              key={key}
              index={key}
              article={article}
              hasVisuals={article.thumbnail}
              className="is-featured"
              onClick={onClick}
            />
          )
        })
      }
    </>
  )
}

export default FeaturedArticles