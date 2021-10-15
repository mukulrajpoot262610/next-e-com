import Head from 'next/head'
import Header from '../components/Header'
import ProductCover from '../components/ProductCover'
import POPULAR_DATA from '../public/popular'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>theGadgetStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full p-4 px-10">
        <Header />
      </div>

      <div className="w-full p-4 px-10">
        <h1 className="text-3xl mb-3 font-semibold">Popular products</h1>
        <div className="flex flex-wrap">
          {
            POPULAR_DATA.filter((e) => e.id < 7).map((e, index) => <ProductCover data={e} key={index} />)
          }
        </div>
      </div>

      <div className="w-full p-4 px-10 flex">
        <div className="bg-blue-500 flex justify-between w-full mr-2 rounded-2xl shadow-lg h-40 p-4">
          <img src="/check-circle.gif" alt="" height={100} width={150} />
          <div className="px-4">
            <h3 className="font-bold text-2xl mb-2">Quality</h3>
            <p>We offer 30 days warranty
              on all our products</p>
          </div>
        </div>
        <div className="bg-green-500 flex justify-between w-full mr-2 rounded-2xl shadow-lg h-40 p-4">
          <img src="" alt="" height={100} width={150} />
          <div className="px-4">
            <h3 className="font-bold text-2xl mb-2">Free-Shipping</h3>
            <p>We offer 30 days warranty
              on all our products</p>
          </div>
        </div>
        <div className="bg-yellow-500 flex justify-between w-full mr-2 rounded-2xl shadow-lg h-40 p-4">
          <img src="" alt="" height={100} width={150} />
          <div className="px-4">
            <h3 className="font-bold text-2xl mb-2">24/7 Support</h3>
            <p>We offer 30 days warranty
              on all our products</p>
          </div>
        </div>
        <div className="bg-yellow-500 flex justify-between w-full mr-2 rounded-2xl shadow-lg h-40 p-4">
          <img src="" alt="" height={100} width={150} />
          <div className="px-4">
            <h3 className="font-bold text-2xl mb-2">Money-Back</h3>
            <p>We offer 30 days warranty
              on all our products</p>
          </div>
        </div>
      </div>

    </div>
  )
}
