import { useEffect, useState } from 'react'
import './App.css'
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import CustomCard from './components/CustomCard'
import Navbar from './components/Navbar'
import MyCard from './components/MyCard'
import Logo from './assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LoadingLogo from './assets/LoadingLogo.png'

import { Divider } from 'primereact/divider';
import Loading from './components/Loading';
import NavBarDaisyUI from './components/NavBarDaisyUI';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import HomeSection from './components/HomeSection';
function App() {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeoutId);
  },[])
  const [quantity, setQuantity] = useState(1);
  const products = [
    {
      id: 1,
      title: 'Goyo Satoru',
      subTitle: 'Jujutsu Kaisen',
      description: 'Imagen sobre un glass painting realizado a goyo satoru de jujutsu kaisen',
      image: 'https://i.etsystatic.com/24154360/r/il/df2123/3102186417/il_fullxfull.3102186417_3vur.jpg',
      price: 10.99,
    },
    {
      id: 2,
      title: 'Kageyama',
      subTitle: 'Haikyuu',
      description: 'Imagen sobre un glass painting realizado a kageyama de haikyuu',
      image: 'https://i.pinimg.com/originals/01/cf/46/01cf46f4a517ce63da9401b71722da05.jpg',
      price: 20.99,
    },
    {
      id: 3,
      title: 'Monkey D Luffy',
      subTitle: 'One Piece',
      description: 'This is the description of product 3',
      image: '/src/assets/luffy.jpg',
    },
    {
      id: 4,
      title: 'Kakashi Hatake',
      subTitle: 'Naruto',
      description: 'Imagen sobre un glass painting realizado a kakashi hatake de naruto',
      image: 'https://i.pinimg.com/originals/c9/a0/85/c9a0857333e2888a43568587a54d2554.jpg',
    },
    {
      id: 5,
      title: 'Kuroo Tetsurou',
      subTitle: 'Haikyuu',
      description: 'Imagen sobre un glass painting realizado a kuroo tetsurou de haikyuu',
      image: 'https://th.bing.com/th/id/OIP.Ox93BYR4vgv7Qyl484YeTAHaJ4?pid=ImgDet&rs=1'
    },
    {
      id: 6,
      title: 'Ichigo Kurosaki',
      subTitle: 'Bleach',
      description: 'Imagen sobre un glass painting realizado a ichigo kurosaki de bleach',
      image: 'https://i.etsystatic.com/34088981/r/il/dbc633/3767548671/il_570xN.3767548671_knph.jpg',
    },
    {
      id: 7,
      title: 'Gon Freecss',
      subTitle:'Hunter x Hunter',
      description: 'Imagen sobre un glass painting realizado a gon freecss de hunter x hunter',
      image: 'https://i.etsystatic.com/23513495/r/il/9eb21e/3103395724/il_1588xN.3103395724_qjn0.jpg',
    },
    {
      id: 8,
      title: 'Katsuki Bakugo',
      subTitle: 'My Hero Academia',
      description: 'Imagen sobre un glass painting realizado a katsuki bakugo de my hero academia',
      image: 'https://th.bing.com/th/id/R.c42667f20909c6604d10fc5042cda820?rik=WAi02Z3lAR9aSQ&pid=ImgRaw&r=0',
    },
    {
      id: 9,
      title: 'Eren Jaeger',
      subTitle: 'Attack on Titan',
      description: 'Imagen sobre un glass painting realizado a eren jaeger de attack on titan',
      image:'https://th.bing.com/th/id/R.b40b83d8dd1bd6b4b29ef0779690c910?rik=P7foBC3XMUkL7g&pid=ImgRaw&r=0',
    }

  ];


  const footer = (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <h4>Size</h4>
        <div className='flex justify-center w-full gap-3'>
          <Button label='15x20' size='small' rounded text raised severity='secondary' />
          <Button label='20x25' size='small' rounded text raised severity="secondary" />
        </div>
      </div>
      <div className='flex items-center justify-between w-full'>
        <h4>Cantidad</h4>
        <div className='flex items-center justify-center w-full'>
          <InputNumber value={quantity} onValueChange={(e: any) => setQuantity(e.value)} buttonLayout="horizontal" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" showButtons className='p-inputnumber' size={5} />
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <Button label='Comprar ahora' size='small' rounded text raised severity='help' className='btnShop' icon='pi pi-shopping-cart' />
      </div>
    </div>
  )

  type carrouselItem ={
    image:string,
    description:string
  }

  const imgs:carrouselItem[] = [
    {image:"https://th.bing.com/th/id/R.b40b83d8dd1bd6b4b29ef0779690c910?rik=P7foBC3XMUkL7g&pid=ImgRaw&r=0",
    description:""},
    {image:"https://i.pinimg.com/originals/c9/a0/85/c9a0857333e2888a43568587a54d2554.jpg",
    description:""},
    {image:"https://th.bing.com/th/id/R.c42667f20909c6604d10fc5042cda820?rik=WAi02Z3lAR9aSQ&pid=ImgRaw&r=0",
    description:""},
    {image:"https://i.etsystatic.com/23513495/r/il/9eb21e/3103395724/il_1588xN.3103395724_qjn0.jpg",
    description:""},
    {image:"https://th.bing.com/th/id/OIP.Ox93BYR4vgv7Qyl484YeTAHaJ4?pid=ImgDet&rs=1",
    description:""},
    {image:"/src/assets/luffy.jpg",
  description:""},]

  if(loading){
    return (
    <Loading/>
  )
  }else{
    return (
      <div>
      {/* <Navbar imgURL={Logo} captions={caption}/> */}
      <NavBarDaisyUI></NavBarDaisyUI>
      <div className='h-max'>      
      <h1 className='text-black text-center mx-12 my-4'>La forma más creativa de decorar tu hogar con tus personajes de anime favoritos</h1>
      <h2 className='text-black text-center'>"¡El vidrio personalizado de anime perfecto para cualquier fan! Crea una obra de arte única con nosotros en MOCHI"</h2>
      <Carousel imgs={imgs} />
      </div>
      <Divider/>
      <HomeSection></HomeSection>
      <Divider/>
      <div className='w-full text-center'>
        <h2 className='text-6xl text-black font-barlow'>Galeria</h2>
      </div>
      <div className='flex justify-center'>
        <div className="App p-10 md:image-gallery md:gap-5">
          {
            products.map((product,key) => {
              return (
              <CustomCard title={product.title} subTitle={product.subTitle} header={<img src={product.image} alt={product.description} className='object-cover m-auto card-image' />} footer={footer} key={key} className='mb-4'>
                  <p className="m-0 text-center">
                    {product.description}
                  </p>
                </CustomCard>
                
              )
            })
          }
        </div>
      </div>
          <Footer></Footer>
    </div>
    )
  }

 
}
{/* <div>
      <Navbar imgURL={Logo} captions={caption}/>
      <div className='w-full text-center'>
        <h2 className='text-6xl text-white font-barlow'>Galeria</h2>
      </div>
      <div className='flex justify-center'>
        <div className="App p-10 image-gallery gap-5">
          {
            products.map((product,key) => {
              return (
              <CustomCard title={product.title} subTitle={product.subTitle} header={<img src={product.image} alt={product.description} className='object-cover m-auto card-image' />} footer={footer} key={key} className=''>
                  <p className="m-0 text-center">
                    {product.description}
                  </p>
                </CustomCard>
                
              )
            })
          }
        </div>
      </div>
    </div> */}

{/* <MyCard key={key} title={product.title} subTitle={product.subTitle} header={<img src={product.image} className="object-cover h-60" />} className="w-96" footer={footer}>
                <p className="m-0">
                  {product.description}
                </p>
              </MyCard> */}
export default App
