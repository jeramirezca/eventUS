import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://kit.fontawesome.com/a1d72236eb.js"></script>
      </Head>

      <body className='bg-blanco-light'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}