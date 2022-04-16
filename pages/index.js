import Head from 'next/head'
import Banner from './Banner'
import Header from './Header'
import ProductFeed from './ProductFeed'
import { getSession, useSession } from "next-auth/react"

export default function Home({ products }) {

  const { data: session } = useSession();


  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <ProductFeed products={products}/>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return{
    props: {
      products,
      session: await getSession(context),
    }
  }
}
