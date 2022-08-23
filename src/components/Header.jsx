import React from 'react'

import { useProductsContext } from '../contexts/productsContext'


// import { IconName } from "react-icons/vsc";


export const Header = () => {
    const { product, setProduct } = useProductsContext();
   console.log(product);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-orange-500 mb-3">
                <div className="container px-2 mx-auto flex flex-wrap items-center justify-right">
                    <div className="w-full relative lg:w-auto  px-6 lg:static lg:block lg:flex-start">
                            <button className="bg-amber-500  text-white active:bg-amber-600 font-bold text-sm px-6 py-3 rounded-r-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                            >
                                <img src="../src/img/falabella-logo.svg" alt="" />
                            </button>
                    </div>
                    <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                        <input type="text" className="px-2 py-1 h-8 border border-solid  border-orange-600 rounded-full text-sm leading-snug text-orange-700 bg-orange-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-full flex-1 border-l-0 placeholder-orange-300" placeholder="Buscar en falabella.com" />
                    </div>
                    <div className="lg:flex flex-grow items-right" id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-right text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-right text-xs  font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Inicia sesión</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-right text-xs  font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                    <span className="ml-2">Mis compras 🛒</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}