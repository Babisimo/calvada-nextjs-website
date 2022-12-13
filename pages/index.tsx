import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Research Calvada</title>
      </Head>
      <div>
        <h1>Home</h1>
        <div>
          <Link href={'/main/counties'}>Counties</Link>
        </div>
      </div>
    </>
  )
}
