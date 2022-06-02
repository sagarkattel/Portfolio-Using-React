import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
  {
    avatar:AVTR1,
    name:'John Snow',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus laudantium autem, obcaecati maiores minus perspiciatis unde neque deleniti quasi magnam animi iste laborum doloremque.'
  },
  {
    avatar:AVTR2,
    name:'Blake White',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus laudantium autem, obcaecati maiores minus perspiciatis unde neque deleniti quasi magnam animi iste laborum doloremque.'
  },
  {
    avatar:AVTR3,
    name:'Johny Depp',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus laudantium autem, obcaecati maiores minus perspiciatis unde neque deleniti quasi magnam animi iste laborum doloremque.'
  },
  {
    avatar:AVTR4,
    name:'Paul Walker',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus laudantium autem, obcaecati maiores minus perspiciatis unde neque deleniti quasi magnam animi iste laborum doloremque.'
  },
]

const Testimonals = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testinomials</h2>
      <Swiper className="container testinomials__container"
            // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }}
      >
      {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className='testinomial'>
          <div className="client__avatar">
            <img src={avatar} alt={avatar} />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>

          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonals