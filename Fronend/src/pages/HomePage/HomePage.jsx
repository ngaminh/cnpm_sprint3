import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/slider1.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/Admin/Loading'
import { useDebounce } from '../../components/Admin/useDebounce'
import { useEffect } from 'react'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 500)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6)
  const [typeProducts, setTypeProducts] = useState([])
  
    const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res

  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }

  const { isPending, data: products, isPreviousData } = useQuery({
    queryKey: ['products', limit, searchDebounce],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true
  })
  

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])

  return (
    <Loading isLoading={isPending || loading}>
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
        <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
        <SliderComponent arrImages={[slider1]} />
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  SystemDrive={product.SystemDrive}
                  Description={product.Description}
                  Image={product.Image}
                  Name={product.Name}
                  Price={product.Price}
                  Gasoline={product.Gasoline}
                  Type={product.Type}
                  id={product._id}
                />
              )
            })}
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textbutton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                width: '240px', height: '38px', borderRadius: '4px'
              }}
              disabled={products?.total === products?.data?.length || products?.totalPage === 1}
              styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
              onClick={() => setLimit((prev) => prev + 6)}
            />
          </div>
        </div>
      </div>
    </Loading>
  )
}

export default HomePage 