import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCartShopping, faQuestion, faImage } from '@fortawesome/free-solid-svg-icons';

function HomeSection() {
    return (
        <div>
            <section className='flex justify-evenly mt-16 mb-16'>
                <div className='flex justify-center items-center flex-col gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 text-orange-400 border p-2 rounded-full border-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <p className='text-black font-barlow text-center tracking-[.125em] leading-loose'>Tienda</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 text-orange-400 border p-2 rounded-full border-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <p className='text-black font-barlow text-center tracking-[.125em] leading-loose'>Galeria</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 text-orange-400 border p-2 rounded-full border-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <p className='text-black font-barlow text-center tracking-[.125em] leading-loose'>Galeria</p>
                </div>
            </section>

            <section className='flex justify-evenly mt-16 mb-16'>
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
            </section>

            <section className='flex justify-evenly mt-16 mb-16'>
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
            </section>
        </div>
    )
}

export default HomeSection