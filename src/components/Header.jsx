import React from 'react'
// import { IconName } from "react-icons/vsc";

export const Header = () => {
    return (
        <>
            <nav className="h-[70px] relative flex flex-wrap items-center justify-between pr-2 pl-0 py-0 bg-[#EE5601] mb-3">
                <div className="container h-[70px] pr-2 pl-0 mx-auto flex flex-wrap items-center justify-right ml-0">
                    <div className="w-full relative lg:w-auto  pr-6 pl-0 lg:static lg:block  ml-0">
                            <button className="bg-gradient-to-r from-[#FF6200] via-[#FF861B] to-[#FF861B]  text-white active:bg-amber-600 font-bold text-sm px-6 py-3 rounded-r-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-0 self-start h-[70px]" type="button"
                            >
                                <img src="../src/img/falabella-logo.svg" alt="" />
                            </button>
                    </div>
                    <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                        <input type="text" className="bg-white px-2 py-1 h-8 border border-solid text-sm leading-snug text-[#6C7883] shadow-none outline-none focus:outline-none w-full font-normal rounded-full flex-1 border-l-0 placeholder-[#6C7883]" placeholder="Buscar en falabella.com" />
                    </div>
                    <div className="lg:flex flex-grow items-right" id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-right text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-right text-xs  font-bold leading-snug text-white hover:opacity-75">
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Inicia sesión</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-right text-xs  font-bold leading-snug text-white hover:opacity-75">
                                    <span className="ml-2">Mis compras 🛒</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='bg-white h-[50px] w-full flex '>
                    <img src="../src/img/location.svg"/>
                    <p className='text-[#495867] px-6'>Entrega en Ñuñoa</p>
                    <p className='text-[#495867] px-6'>Nuestras tiendas:</p>

                </div>
            </nav>
        </>
    )
}