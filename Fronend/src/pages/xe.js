import React from 'react'
import { Link } from 'react-router-dom'


const xe = () => {
  return (
    <>
      <div class="grid grid-cols-6 gap-4">
        {/* side bar nè hihi */}
        <div class="mt-20 px-4">
          {/* phân khúc xe */}
          <div className=''>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">PHÂN KHÚC XE</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700">
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sport</label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SUV</label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="angular-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sedan</label>
                </div>
              </li>
              <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="laravel-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Couple</label>
                </div>
              </li>
            </ul>

          </div>
          {/* loại chỗ ngồi  */}
          <div className='mt-5'>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">LOẠI CHỖ NGỒI</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700">
              <li class="w-full rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4 chỗ</label>
                </div>
              </li>
              <li class="w-full rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">7 chỗ</label>
                </div>
              </li>
              <li class="w-full rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label for="angular-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">16 chỗ</label>
                </div>
              </li>
            </ul>

          </div>
          {/* button ne */}
          <div className='w-5/6 mx-auto my-0'>
          <a href="#_" class="inline-flex items-center justify-center w-full h-10 px-8 py-4 text-base font-bold leading-6 text-white bg-slate-800 border border-transparent rounded-xl md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            Xác Nhận
          </a>
          </div>
        </div>
        {/* content danh sách các xe nè hihi */}
        <div class="col-span-5 bg-slate-300">
          <div class="grid grid-cols-3 gap-4 w-5/6 my-0 mx-auto">
            <div>
              {/* <!-- Xe 1 --> */}
              <div>
                <div
                  className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={require("../assets/images/xe1.png")} alt="product image" />
                    <span
                      className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39%
                      OFF</span>
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-2xl tracking-tight text-slate-900">TOYOTA 1</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-lg font-bold text-slate-900">200.000đ/ngày</span>
                        {/* <span className="text-sm text-slate-900 line-through">500.000</span> */}
                      </p>
                      <div className="flex items-center">
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <span
                          className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      </div>
                    </div>
                    <Link to="/ctxe"
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      <i className='bx bx-cart-alt' style={{ color: "#fff", fontSize: "24px" }}></i>
                      Thuê Xe</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!-- Xe 2 --> */}
              <div>
                <div
                  className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={require("../assets/images/xe2.png")} alt="product image" />
                    <span
                      className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      20% OFF</span>
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-2xl tracking-tight text-slate-900">BWW 320i</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-lg font-bold text-slate-900">800.000đ/ngày</span>
                        {/* <span className="text-sm text-slate-900 line-through">1.000.000</span> */}
                      </p>
                      <div className="flex items-center">
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <span
                          className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      </div>
                    </div>
                    <Link to="/ctxe"
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      <i className='bx bx-cart-alt' style={{ color: "#fff", fontSize: "24px" }}></i>
                      Thuê Xe</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!-- xe 3 --> */}
              <div>
                <div
                  className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={require("../assets/images/xe3.png")} alt="product image" />
                    <span
                      className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      30% OFF</span>
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-2xl tracking-tight text-slate-900">Mercedes C200</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-lg font-bold text-slate-900">2.000.000đ/ngày</span>
                        {/* <span className="text-sm text-slate-900 line-through">2.500.000</span> */}
                      </p>
                      <div className="flex items-center">
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <span
                          className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      </div>
                    </div>
                    <Link to="/ctxe"
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      <i className='bx bx-cart-alt' style={{ color: "#fff", fontSize: "24px" }}></i>
                      Thuê Xe</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!-- xe 4 --> */}
              <div>
                <div
                  className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={require("../assets/images/xe3.png")} alt="product image" />
                    <span
                      className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      30% OFF</span>
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-2xl tracking-tight text-slate-900">Mercedes C200</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-lg font-bold text-slate-900">2.000.000đ/ngày</span>
                        {/* <span className="text-sm text-slate-900 line-through">2.500.000</span> */}
                      </p>
                      <div className="flex items-center">
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <span
                          className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      </div>
                    </div>
                    <Link to="/ctxe"
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      <i className='bx bx-cart-alt' style={{ color: "#fff", fontSize: "24px" }}></i>
                      Thuê Xe</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!-- xe 5 --> */}
              <div>
                <div
                  className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={require("../assets/images/xe3.png")} alt="product image" />
                    <span
                      className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      30% OFF</span>
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-2xl tracking-tight text-slate-900">Mercedes C200</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-lg font-bold text-slate-900">2.000.000đ/ngày</span>
                        {/* <span className="text-sm text-slate-900 line-through">2.500.000</span> */}
                      </p>
                      <div className="flex items-center">
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <span
                          className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      </div>
                    </div>
                    <Link to="/ctxe"
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      <i className='bx bx-cart-alt' style={{ color: "#fff", fontSize: "24px" }}></i>
                      Thuê Xe</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!-- xe 6 --> */}
              <div>
                <div
                  className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={require("../assets/images/xe3.png")} alt="product image" />
                    <span
                      className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      30% OFF</span>
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-2xl tracking-tight text-slate-900">Mercedes C200</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-lg font-bold text-slate-900">2.000.000đ/ngày</span>
                        {/* <span className="text-sm text-slate-900 line-through">2.500.000</span> */}
                      </p>
                      <div className="flex items-center">
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        <span
                          className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      </div>
                    </div>
                    <Link to="/ctxe"
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      <i className='bx bx-cart-alt' style={{ color: "#fff", fontSize: "24px" }}></i>
                      Thuê Xe</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default xe