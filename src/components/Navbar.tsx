import 'primeicons/primeicons.css';
import {useState} from 'react'
import { PrimeIcons } from 'primereact/api';
function Navbar({imgURL,captions}:any) {
    const [header,setHeader] = useState(false)

    function changeBackground(){
        if(window.scrollY >= 80){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
  return (
    <header className={header ? 'header active' : 'header'}>
        <div 
        className='w-full flex items-center justify-between pt-2 pb-2  pl-4 pr-4'>
            <div className='flex items-center gap-4'>
                <div className='ml-16'>
                    <h2 className="font-merienda text-4xl text-logo">Mochi</h2>
                </div>
                {/* <img src={imgURL} className="w-12 border-2 rounded-full border-teal-500" /> */}
            </div>
            
            <ul className='flex w-56 justify-between mr-4'>
                {
                    captions.map((caption:any,index:any) => {
                        return (
                                <li key={index}><a href={caption.link} className='text-white font-indieflower text-xl hover:text-teal-500' >{caption.title}</a></li>
                        )
                    })
                }
                <li className=''><a className='text-white font-indieflower text-xl hover:text-teal-500' href='#'><i className='pi pi-shopping-cart '></i></a></li>
            </ul>
            
        </div>
    </header>
  )
}

export default Navbar