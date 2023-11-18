import React from 'react'

const ChiTietXe = () => {
    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                {/* side bar nè hihi */}
                <div className="mt-20 px-4">
                    {/* phân khúc xe */}
                    <div className=''>
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">PHÂN KHÚC XE</h3>
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700">
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sport</label>
                                </div>
                            </li>
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SUV</label>
                                </div>
                            </li>
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sedan</label>
                                </div>
                            </li>
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Couple</label>
                                </div>
                            </li>
                        </ul>

                    </div>
                    {/* loại chỗ ngồi  */}
                    <div className='mt-5'>
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">LOẠI CHỖ NGỒI</h3>
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700">
                            <li className="w-full rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4 chỗ</label>
                                </div>
                            </li>
                            <li className="w-full rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">7 chỗ</label>
                                </div>
                            </li>
                            <li className="w-full rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">16 chỗ</label>
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
                <div className="col-span-5">
                    <section className="py-10 font-poppins">
                        <div className="max-w-6xl px-4 mx-auto">
                            {/* chi tiết xe */}
                            <div className="flex flex-wrap mx-4">
                                {/* nửa 1 */}
                                <div className="w-full px-2 md:w-1/2 md:mb-0">
                                    <div className="sticky top-0 overflow-hidden ">
                                        <div className="relative mb-6 lg:mb-10 lg:h-96">
                                            <a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-red-500 bi bi-chevron-left dark:text-red-200" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <img className="object-contain w-full lg:h-full" src={require("../assets/images/xe3.png")} alt="product image" />
                                            <a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-red-500 bi bi-chevron-right dark:text-red-200" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex-wrap hidden -mx-2 md:flex">
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                                    <img className="object-contain w-full lg:h-28" src={require("../assets/images/xe1.png")} alt="product image" />
                                                </a>
                                            </div>
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                                    <img className="object-contain w-full lg:h-28" src={require("../assets/images/xe2.png")} alt="product image" />
                                                </a>
                                            </div>
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                                    <img className="object-contain w-full lg:h-28" src={require("../assets/images/xe3.png")} alt="product image" />
                                                </a>
                                            </div>
                                            <div className="w-1/2 p-2 sm:w-1/4">
                                                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                                    <img className="object-contain w-full lg:h-28" src={require("../assets/images/xe4.png")} alt="product image" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* nửa 2 */}
                                <div className="w-full p-4  md:w-1/2">
                                    <div className="lg:pl-20">
                                        <span className="px-2.5 py-0.5 text-xs text-red-600 bg-red-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                                            Xe mới
                                        </span>
                                        <div className="mb-6 flex flex-wrap justify-between">
                                            <div>
                                                <h2 className="max-w-xl text-xl font-semibold leading-loose tracking-wide text-dark-700 md:text-2xl dark:text-gray-300">
                                                    Nissan GT-R
                                                </h2>
                                                <div className="flex flex-wrap items-center mb-6">
                                                    <ul className="flex mb-4 mr-2 lg:mb-0">
                                                        <li>
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                                    </path>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                                    </path>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                                    </path>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                                    </path>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <span className="mb-4 text-xs underline hover:text-red-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0" href="#">
                                                        52+ đánh giá
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 mb-6">
                                                <a href="#_" class="inline-flex items-center justify-center w-full h-10 px-8 py-4 text-base font-bold leading-6 text-white bg-slate-800 border border-transparent rounded-md md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                                    Thuê Ngay
                                                </a>
                                            </div>
                                            <p>
                                                Loại xe được mọi người tin tưởng ,động cơ mạnh của thế hệ mới nhất , tốc độ đạt hơn 220km/h , giúp các bạn chinh phục mọi giới hạn
                                            </p>
                                            <p className="inline-block mt-8 text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span>200.000đ/ngày</span>
                                                <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">500.000đ/ngày</span>
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Đặc điểm :</h2>
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                                                <div className="p-3 lg:p-5 ">
                                                    <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                                                            <div className="w-full mb-4 md:w-2/5">
                                                                <div className="flex ">
                                                                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3 w-7 h-7" viewBox="0 0 16 16">
                                                                            <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div>
                                                                        <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                            Loại xe
                                                                        </p>
                                                                        <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                            Sport
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-full mb-4 md:w-2/5">
                                                                <div className="flex ">
                                                                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gpu-card w-7 h-7" viewBox="0 0 16 16">
                                                                            <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                                                                            <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div>
                                                                        <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                            Chỗ ngồi:
                                                                        </p>
                                                                        <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                            7 chỗ
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                                <div className="flex ">
                                                                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-7 h-7 bi bi-cpu" viewBox="0 0 16 16">
                                                                            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div>
                                                                        <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                            Hệ thống lái
                                                                        </p>
                                                                        <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                            Thường
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                                <div className="flex ">
                                                                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history w-7 h-7" viewBox="0 0 16 16">
                                                                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                                                                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                                                                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <div>
                                                                        <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                            Xăng
                                                                        </p>
                                                                        <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                            70 lít
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center mb-6">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* comment  */}
                            <section class="bg-slate-100 py-4 my-2 rounded-xl antialiased ">
                                <div class="max-w-4xl mx-auto px-4">
                                    <div class="flex justify-between items-center mb-6">
                                        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Đánh giá (20)</h2>
                                    </div>
                                    <article class="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <footer class="flex justify-between items-center mb-2">
                                            <div class="flex items-center">
                                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                                    <img
                                                        class="mr-2 w-6 h-6 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                        alt="Bonnie Green" />
                                                    Đỗ Quỳnh
                                                </p>
                                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                                                    title="March 12th, 2022">21 tháng 3, 2023</time></p>
                                            </div>
                                        </footer>
                                        <p class="text-gray-500 dark:text-gray-400">
                                            Chất lượng xe rất tốt ,đạt yêu cầu cao khi di chuyển đường dài ,mọi người hãy thuê thử xem như thế nào , xe tôi đang chạy thật sự rất tốt
                                        </p>
                                    </article>
                                    <article class="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <footer class="flex justify-between items-center mb-2">
                                            <div class="flex items-center">
                                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                                    <img
                                                        class="mr-2 w-6 h-6 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                        alt="Helene Engels" />
                                                    Trâm Bùi
                                                </p>
                                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                                                    title="June 23rd, 2022">29 tháng 9, 2023</time></p>
                                            </div>
                                        </footer>
                                        <p class="text-gray-500 dark:text-gray-400">
                                            Tôi thực sự rất thích cảm giác lái xe của chiếc này ,cảm giác rất đầm tay ,tốc độ dễ kiểm soát .
                                            Tôi và gia đình đã thực sự có một chuyến du lịch thật tuyệt vời !!
                                        </p>

                                    </article>
                                    <form class="">
                                        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                            <label for="comment" class="sr-only">Your comment</label>
                                            <textarea id="comment" rows="6"
                                                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                                                placeholder="Write a comment..." required>
                                            </textarea>
                                        </div>
                                        <button type="submit"
                                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                            Post comment
                                        </button>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ChiTietXe