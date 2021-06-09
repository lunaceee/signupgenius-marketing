import React from 'react'
import { useRouter } from 'next/router'
import Error from '../404'

import Layout from '../../components/layout'
import { getAllDocSlugs, getPage } from '../../lib/api'


const Post = ({ data }) => {
  const router = useRouter()

  if (!router.isFallback && !data) {
    return <Error statusCode={404} />
  }

  const { site, post } = data

  return (
    <>
      {!router.isFallback && (
        <Layout site={site} post={post}>
          {post.title}
          {post.postThumbnail.alt}
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps({ params, preview, previewData }) {
  const postData = await getPage(params.slug.join('/'), {
    active: preview,
    token: previewData?.token,
  })

  return {
    props: {
      data: postData,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllDocSlugs('post')

  return {
    paths:
      allPosts?.map((post) => {
        let slugs = post.slug.split('/').filter((e) => e)
        return {
          params: {
            slug: slugs,
          },
        }
      }) || [],
    fallback: false,
  }
}

export default Post
