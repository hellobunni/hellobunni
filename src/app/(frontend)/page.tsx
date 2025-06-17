import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import HomeHero from '@/components/Heroes/HomeHero'
import PostList from '@/components/PostList'
import ProjectBox from '@/components/ProjectBox'
import LogoCloud from '@/components/LogoCloud'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page: 1,
    overrideAccess: false,
  })

  return (
    <div className="home">
      <HomeHero />
      <PostList posts={posts.docs} />
      <div className="py-42">
        <ProjectBox />
        <LogoCloud />
      </div>
    </div>
  )
}
