import { Col, Image, Rate, Row } from 'antd'
import React from 'react'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber, WrapperBtnQualityProduct } from './style'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'
import Loading from '../Admin/Loading'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addOrderProduct,resetOrder } from '../../redux/slides/orderSlide'
import { convertPrice, initFacebookSDK } from '../../utils'
import { useEffect } from 'react'
import * as message from '../Admin/Message'
import LikeButtonComponent from '../LikeButtonComponent/LikeButtonComponent'
import CommentComponent from '../CommentComponent/CommentComponent'
import { useMemo } from 'react'

const ProductDetailsComponent = ({idProduct}) => {
    const [numProduct, setNumProduct] = useState(1)
    const user = useSelector((state) => state.user)
    const order = useSelector((state) => state.order)
    const [errorLimitOrder,setErrorLimitOrder] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const onChange = (value) => { 
        setNumProduct(Number(value))
    }

    const fetchGetDetailsProduct = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        if(id) {
            const res = await ProductService.getDetailsProduct(id)
            return res.data
        }
    }

    useEffect(() => {
        initFacebookSDK()
    }, [])

    useEffect(() => {
        const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id) 
        if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock ) {
            setErrorLimitOrder(false)
        } else if(productDetails?.countInStock === 0){
            setErrorLimitOrder(true)
        }
    },[numProduct])

    // useEffect(() => {
    //     if(order.isSucessOrder) {
    //         message.success('Đã thêm vào giỏ hàng')
    //     }
    //     return () => {
    //         dispatch(resetOrder())
    //     }
    // }, [order.isSucessOrder])

    const handleChangeCount = (type, limited) => {
        if(type === 'increase') {
            if(!limited) {
                setNumProduct(numProduct + 1)
            }
        }else {
            if(!limited) {
                setNumProduct(numProduct - 1)
            }
        }
    }

    const { isPending, data: productDetails } = useQuery({
        queryKey: ['product-details', idProduct],
        queryFn: fetchGetDetailsProduct,
        enabled: !!idProduct,
      });

    const handleAddOrderProduct = () => {
        if(!user?.id) {
            navigate('/sign-in', {state: location?.pathname})
        }else {
            // {
            //     name: { type: String, required: true },
            //     amount: { type: Number, required: true },
            //     image: { type: String, required: true },
            //     price: { type: Number, required: true },
            //     product: {
            //         type: mongoose.Schema.Types.ObjectId,
            //         ref: 'Product',
            //         required: true,
            //     },
            // },
            const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id)
            if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock ) {
                dispatch(addOrderProduct({
                    orderItem: {
                        name: productDetails?.Name,
                        amount: numProduct,
                        image: productDetails?.Image,
                        price: productDetails?.Price,
                        product: productDetails?._id
                    }
                }))
            } else {
                setErrorLimitOrder(true)
            }
        }
    }

    return (
        <Loading isLoading={isPending}>
            <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px', height:'100%' }}>
                <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                    <Image src={productDetails?.Image} alt="image prodcut" preview={false} />
                    
                        
                </Col>
                <Col span={14} style={{ paddingLeft: '10px' }}>
                    <WrapperStyleNameProduct>{productDetails?.Name}</WrapperStyleNameProduct>
                    <div>
                        <Rate allowHalf defaultValue={productDetails?.rating} value={productDetails?.rating} />
                        <WrapperStyleTextSell>2 chuyến</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>{convertPrice(productDetails?.Price)}</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến </span>
                        <span className='address'>{user?.address}</span> -
                        <span className='change-address'>Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <LikeButtonComponent
                     dataHref={ process.env.REACT_APP_IS_LOCAL 
                                ? "https://developers.facebook.com/docs/plugins/" 
                                : window.location.href
                            } 
                    />
                    <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ marginBottom: '10px' }}>Số lượng</div>
                        <WrapperQualityProduct>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease',numProduct === 1)}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                            <WrapperInputNumber onChange={onChange} defaultValue={1} max={productDetails?.countInStock} min={1} value={numProduct} size="small" />
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase',  numProduct === productDetails?.Price)}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                        </WrapperQualityProduct>
                    </div>
                    <div style={{ display: 'flex', aliggItems: 'center', gap: '12px' }}>
                        <div>
                            <ButtonComponent
                                size={40}
                                styleButton={{
                                    background: 'rgb(255, 57, 69)',
                                    height: '48px',
                                    width: '220px',
                                    border: 'none',
                                    borderRadius: '4px'
                                }}
                                onClick={handleAddOrderProduct}
                                textbutton={'Chọn thuê'}
                                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>
                            {errorLimitOrder && <div style={{color: 'red'}}>San pham het hang</div>}
                        </div>
                    </div>
                </Col>
                <CommentComponent 
                    dataHref={process.env.REACT_APP_IS_LOCAL 
                        ? "https://developers.facebook.com/docs/plugins/comments#configurator"
                        : window.location.href
                    } 
                    width="1270" 
                />
            </Row >
            
        </Loading>
    )
}

export default ProductDetailsComponent