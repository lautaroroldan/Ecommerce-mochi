import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCartShopping, faQuestion, faImage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SVGQuestion, SVGShopping,SVGGalery } from './SVGComponents'
function HomeSection() {
    return (
        <div className='bg-orange-400'>
            <h2 className='text-center text-5xl'>Titulo</h2>
            <section className='flex justify-evenly md:flex-row flex-col mt-16 mb-16 ml-8 mr-8 md:ml-0 md:mr-0'>
                <Link to="/" className='p-4 shadow-lg rounded-2xl hover:bg-white transitions-all duration-500 flex flex-col justify-center items-center'>
                    <SVGShopping width={240} height={240} />
                    <p className='text-black font-barlow text-center tracking-[.125em] leading-loose'>Comprar</p>
                </Link>
                <Link to="/galery" className='p-4 shadow-lg rounded-2xl hover:bg-white transitions-all duration-500 flex flex-col justify-center items-center'>
                    <SVGGalery width={240} height={240} />
                    <p className='text-black font-barlow text-center tracking-[.125em] leading-loose'>Galeria</p>
                </Link>
                <Link to="/" className='p-4 shadow-lg rounded-2xl hover:bg-white transitions-all duration-500 flex flex-col justify-center items-center'>
                    <SVGQuestion width={240} height={240} />
                    <p className='text-black font-barlow text-center tracking-[.125em] leading-loose'>Preguntas</p>
                </Link>
            </section>

            {/* <section className='flex justify-evenly mt-16 mb-16'>
                <div className='flex justify-start items-center flex-col border-2 p-16 border-orange-400'>
                    <FontAwesomeIcon icon={faImage} size='2x' className='text-white bg-orange-400 p-4 rounded-full flex items-center text-center' />
                    <p className='text-black'>Galeria</p>
                </div>
                <div className='flex justify-start items-center flex-col border-2 p-16 border-orange-400'>
                    <FontAwesomeIcon icon={faImage} size='2x' className='text-white bg-orange-400 p-4 rounded-full flex items-center text-center' />
                    <p className='text-black'>Galeria</p>
                </div>
                <div className='flex justify-start items-center flex-col border-2 p-16 border-orange-400'>
                    <FontAwesomeIcon icon={faImage} size='2x' className='text-white bg-orange-400 p-4 rounded-full flex items-center text-center' />
                    <p className='text-black'>Galeria</p>
                </div>
            </section> */}

            {/* <section className='flex justify-evenly mt-16 mb-16'>
                <div className='flex justify-center items-center flex-col'>
                    <FontAwesomeIcon icon={faQuestion} size='2x' className='text-white bg-orange-400 px-5 py-4 rounded-full flex items-center text-center' />
                    <p className='text-black'>Preguntas</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <FontAwesomeIcon icon={faQuestion} size='2x' className='text-white bg-orange-400 px-5 py-4 rounded-full flex items-center text-center' />
                    <p className='text-black'>Preguntas</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <FontAwesomeIcon icon={faQuestion} size='2x' className='text-white bg-orange-400 px-5 py-4 rounded-full flex items-center text-center' />
                    <p className='text-black'>Preguntas</p>
                </div>
            </section> */}
        </div>
    )
}

export default HomeSection