import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { isJsonString } from './utils'
import { jwtDecode } from "jwt-decode";
import * as UserService from './services/UserService'
import { resetUser, updateUser } from './redux/slides/userSlide'
import Profile from './pages/Profile/ProfilePage'
import Home from './pages/HomePage/HomePage'
import DMXe from './pages/danhMucXe'
import Admin from './pages/Admin'
import LienHe from './pages/lienHe'
import DSCuaHang from './pages/danhSachCuaHang'
import DangKy from './pages/SignUpPage/SignUpPage'
import DangNhap from './pages/SignInPage/SignInPage'
import Details from './pages/ProductDetailsPage/ProductDetailsPage'
import DSXe from './pages/xe'
import CTXe from './pages/ChiTietXe'
import PrivateRoute from './components/PrivateRoute'
import HeaderComponent from './components/HeaderCompoent/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'


function App() {
  const fetchApi = async () => {
    const res = await axios.get('http://localhost:3001/api/product/get-all')
    return res.data
  }
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  console.log('query', query)
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    setIsLoading(true)
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
    setIsLoading(false)
  }, [])

  const handleDecoded = () => {
    let storageData = user?.access_token || localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }
  }

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const decodedRefreshToken = jwtDecode(refreshToken)
    if (decoded?.exp < currentTime.getTime() / 1000) {
      if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken(refreshToken)
        config.headers['token'] = `Bearer ${data?.access_token}`
      } else {
        dispatch(resetUser())
      }
    }
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

  const handleGetDetailsUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken }))
  }

  if (useLocation().pathname.includes("/admin")) { return (<Admin />) }
  return (
    <>
      {/*phần bao quanh toàn bộ trang chủ*/}
      <div id="trangchu">
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dmxe" element={<DMXe />} />
          <Route path="/product-details/:id" element={<Details/>} />
          <Route path="/lienhe" element={<LienHe />} />
          <Route path="/dscuahang" element={<DSCuaHang />} />
          <Route path="/dsxe" element={<DSXe />} />
          <Route path="/ctxe" element={<CTXe />} />
          <Route path="/sign-up" element={<DangKy/>} />                    
          <Route path="/sign-in" element={<DangNhap />} />
          <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
