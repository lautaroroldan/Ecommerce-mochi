import React from 'react'
import CustomCard from '../components/CustomCard/CustomCard'

function GaleryScreen() {
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
          subTitle: 'Hunter x Hunter',
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
          image: 'https://th.bing.com/th/id/R.b40b83d8dd1bd6b4b29ef0779690c910?rik=P7foBC3XMUkL7g&pid=ImgRaw&r=0',
        }
    
      ];
  return (
    <div>
         <div className='w-full text-center'>
          <h2 className='text-6xl text-black font-barlow'>Galeria</h2>
        </div>
        <div className='flex justify-center'>
          <div className="App p-10 image-gallery gap-5">
            {
              products.map((product, key) => {
                return (
                  <CustomCard title={product.title} subTitle={product.subTitle} header={<img src={product.image} alt={product.description} className='object-cover m-auto card-image' />} key={key} className='mb-4'>
                  </CustomCard>

                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default GaleryScreen