import React from 'react'
import { AiOutlineShoppingCart, AiOutlineDown, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";


export const Header = () => {

    return (
        <div>
            <nav className=" font-Lato w-full static flex flex-wrap items-center pr-0 pl-0 py-0  mb-0">
                <div className="w-screen h-[70px] pr-2 pl-0 mx-auto flex flex-wrap items-center justify-right ml-0 bg-[#EE5601]">
                    <div className=" static lg:w-auto pl-0 lg:static lg:block  ml-0">
                        <button className="bg-gradient-to-r from-[#FF6200] via-[#FF861B] to-[#FF861B]  text-white active:bg-amber-600 font-bold text-sm px-6 py-3 rounded-r-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-0 self-start h-[70px]" type="button">
                            <img src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/77c32d86e428a40acbd9a42730dfe6940918feed/public/img/falabella-logo.svg" alt="" />
                        </button>
                    </div>
                    <div className='flex justify-center items-center h-[70px] w-[196px]'>
                        <span className='flex text-justify text-[23px] text-white font-bold font-Lato'> <AiOutlineMenu style={{display: 'inline', width: '30px', height: '35px', color: 'white'}} /> Menú </span>
                    </div>
                    <div className="static flex w-[1047px]  px-4 flex-wrap items-center ">
                        <input type="text" className="z-auto bg-white px-2 py-1 h-[46px] w-[300px]  border border-solid text-sm leading-snug text-[#6C7883]  shadow-none outline-none focus:outline-none font-normal rounded-full flex-1 border-l-0 placeholder-[#6C7883]" placeholder="Buscar en falabella.com" />
                        <button className='z-0 bg-gray-600 h-[46px] w-[46px]  rounded-full '><AiOutlineSearch style={{display: 'inline', width: '30px', height: '35px', color: 'white'}}/></button>
                    </div>
                    <div className="flex flex-grow justify-end w-[100px]" id="example-navbar-warning w-56" >
                        <ul className="flex flex-collg:flex-row list-none items-center">
                            <li className="flex flex-start nav-item h-[70px] w-[150px]">
                                <a className="flex flex-col font-bold leading-snug text-white hover:opacity-75">
                                    <span className="text-xl text-left pr-2 font-Lato">Hola,</span>
                                    <div className="flex flex-row">
                                        <span className="text-xl font-bold text-left pr-2 font-Lato ">Inicia sesión </span>
                                        <AiOutlineDown />
                                    </div>
                                </a>
                            </li>
                            <p className='text-5xl text-white font-light'>|</p>
                            <li className=" flex flex-start nav-item h-[70px] w-[100px]">
                                <a className="flex flex-start flex-col font-bold leading-snug text-white hover:opacity-75">
                                    
                                    <div>
                                        <span className="text-xl text-left pr-2 pl-2 font-Lato ">Mis</span>
                                        <div>
                                            <span className=" flex text-xl text-left pr-2 pl-2 font-Lato">compras </span>
                                        </div>
                                    </div>
                                    
                                    
                                </a>
                            </li>
                            <p className='text-5xl text-white font-light'>|</p>
                        </ul>
                    </div>
                    <div className='pr-4'>
                        <AiOutlineShoppingCart style={{display: 'inline', width: '50px', height: '37px', color: 'white'}} />
                    </div>
                    
                </div>
                <div className='bg-white h-[50px] w-full flex items-center justify-between'>
                    <div>
                        <img className='w-8 inline' src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/77c32d86e428a40acbd9a42730dfe6940918feed/public/img/location.svg" />
                        <p className='text-[#495867] text-lg align-middle pl-0 pr-6 px-6 inline'>Entrega en Ñuñoa</p>
                    </div>
                    <div className='flex flex-row w-[884px] items-center'>
                        <div>
                            <p className='text-[#495867] text-lg pr-3 px-6 inline'>Nuestras tiendas: </p>
                            <div className='w-36 inline-flex justify-between align-middle'>
                                <img className='w-8' src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/77c32d86e428a40acbd9a42730dfe6940918feed/public/img/falabella-store-logo.svg" alt="falabella" />
                                <img className='w-8' src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/77c32d86e428a40acbd9a42730dfe6940918feed/public/img/sodimac-logo.svg" alt="sodimac" />
                                <img className='w-8' src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/77c32d86e428a40acbd9a42730dfe6940918feed/public/img/tottus-logo.svg" alt="tottus" />
                                <img className='w-8' src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/77c32d86e428a40acbd9a42730dfe6940918feed/public/img/linio-logo.svg" alt="linio" />
                            </div>
                        </div>
                        <p className='text-4xl text-gray-300 font-light'>|</p>
                        <div className='flex mt-8 px-4 h-[50px] '>
                            <span className='text-[#495867] text-sm pr-2'>Vende en Falabella.com</span>
                            <span className='text-[#495867] text-sm pr-2'>Tarjeta CMR <AiOutlineDown style={{display: 'inline', width: '16px', height: '16px', color: '#495867'}}/></span>
                            <span className='text-[#495867] text-sm pr-2'>Venta telefónica <AiOutlineDown style={{display: 'inline', width: '16px', height: '16px', color: '#495867'}}/></span>
                            <span className='text-[#495867] text-sm pr-2'>Novios</span>
                            <span className='text-[#495867] text-sm pr-2'>Ayuda <AiOutlineDown style={{display: 'inline', width: '16px', height: '16px', color: '#495867'}}/></span>
                        </div>
                    </div>
                    

                </div>
                <img className='w-full h-[55px]' src="https://raw.githubusercontent.com/GenyLongart/Talent-Fest-Latam/master/public/img/img-header.PNG" alt='header-gray' />
            </nav>
        </div>
    )
}