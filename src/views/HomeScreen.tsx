import React, { useState } from 'react'
import Carousel from '../components/Carousel/Carousel'
import { Divider } from 'primereact/divider'
import HomeSection from '../components/HomeSection'
import Galery from '../components/Galery3D/Galery'
import CustomCard from '../components/CustomCard/CustomCard'
import Footer from '../components/Footer'
import { Button } from 'primereact/button'
import { InputNumber } from 'primereact/inputnumber'

function HomeScreen() {
    const [quantity, setQuantity] = useState(1)
    type carrouselItem = {
        image: string,
        description: string
    }

    const imgs: carrouselItem[] = [
        {
            image: "https://th.bing.com/th/id/R.b40b83d8dd1bd6b4b29ef0779690c910?rik=P7foBC3XMUkL7g&pid=ImgRaw&r=0",
            description: ""
        },
        {
            image: "https://i.pinimg.com/originals/c9/a0/85/c9a0857333e2888a43568587a54d2554.jpg",
            description: ""
        },
        {
            image: "https://th.bing.com/th/id/R.c42667f20909c6604d10fc5042cda820?rik=WAi02Z3lAR9aSQ&pid=ImgRaw&r=0",
            description: ""
        },
        {
            image: "https://i.etsystatic.com/23513495/r/il/9eb21e/3103395724/il_1588xN.3103395724_qjn0.jpg",
            description: ""
        },
        {
            image: "https://th.bing.com/th/id/OIP.Ox93BYR4vgv7Qyl484YeTAHaJ4?pid=ImgDet&rs=1",
            description: ""
        },
        {
            image: "/src/assets/luffy.jpg",
            description: ""
        },]


    return (
        <div className='overflow-hidden'>
            <div className='h-max'>
                <h1 className='text-black text-center mx-12 my-4'>La forma más creativa de decorar tu hogar con tus personajes de anime favoritos</h1>
                <h2 className='text-black text-center'>"¡El vidrio personalizado de anime perfecto para cualquier fan! Crea una obra de arte única con nosotros en MOCHI"</h2>
                <Carousel imgs={imgs} />
            </div>
            <div className='flex flex-col bg-orange-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,170.7C672,149,768,107,864,112C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                {/* #fb923c */}
                <HomeSection />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,170.7C672,149,768,107,864,112C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className='flex justify-center mb-24'>
                <Galery/>
            </div>
        </div>
    )
}

export default HomeScreen