import React, { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts } from '../../store/actions/productAction'
import { useRouter } from 'next/router'
import { Spin, Alert } from 'antd';
import ProductDetail from '../../components/ProductDetail';

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

            <div className="w-full p-4 px-4 lg:px-10">
                {
                    loading ? <Spin size='large' /> : error ? (<Alert message="Error" type="error" showIcon />) : product && <ProductDetail data={product} />
                }
            </div>
        </div>
    )
}

export default ProductDetailPage
