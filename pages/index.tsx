import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { allPosts, Post } from '../.contentlayer/generated'

const Home: NextPage = () => {
  return (
    <div className="text-center flex justify-center flex-col place-items-center">
      <Head>
        <title>Toby&apos;s blog</title>
        <meta name="description" content="Toby&apos;s blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="absolute top-36">
          <h1 className="font-bold text-6xl">Toby&apos;s blog</h1>
        </div>
    </div>
  )
}

export default Home
