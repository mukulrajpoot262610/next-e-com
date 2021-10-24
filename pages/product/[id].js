import React, { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts } from '../../store/actions/productAction'
import { useRouter } from 'next/router'
import { Spin, Alert } from 'antd';
import ProductDetail2 from '../../components/ProductDetail2';

const ProductDetailPage = () => {

    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail)
    const { product, loading, error } = productDetail
    const router = useRouter()
    console.log('PRODUCT: ', product)

    useEffect(() => {
        router.query.id && dispatch(detailProducts(router.query.id))
    }, [dispatch, router])

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>{product?.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full min-h-screen flex justify-center items-center py-4">
                {
                    loading ? <Spin size='large' /> : error ? (<Alert message="Error" type="error" showIcon />) : product && <ProductDetail2 data={product} />
                }
            </div>
        </div>
    )
}

export default ProductDetailPage
