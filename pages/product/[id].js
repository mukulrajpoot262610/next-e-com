import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const ProductDetail = () => {

    const router = useRouter()



    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>{router.query.id}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full p-4 px-4 lg:px-10">
                <h1>{router.query.id}</h1>
            </div>
        </div>
    )
}

export default ProductDetail
