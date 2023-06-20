import React, {useState} from 'react'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {

  const [isAccessibility, setAccessibility] = useState(false);


  return (
    <Html lang="en">
      <Head />
      <body className={isAccessibility ? "bg-black text-textmain" : "bg-white"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
