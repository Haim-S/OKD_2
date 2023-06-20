import React, {useState} from 'react'
// import Image from 'next/image'
import Head from 'next/head'
// import { Inter } from 'next/font/google'
import Main from '@/components/main/Main'
import Categories from './Categories'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
   <>
   <Head>
    <title>Okd Studio</title>
        {/* <meta name="description" content="" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
   </Head>
   <Main/>
   <Categories/>
   
  
   </>
  )
}
