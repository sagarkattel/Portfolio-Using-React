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
    name:'Amit Shah',
    review:'I have been extremely impressed with [developer] work on our React-based project. Not only is the end result visually stunning, but the code is clean, efficient, and easy to maintain. [Developer] is a true professional and I highly recommend them to anyone in need of a top-notch frontend developer.'
  },
  {
    avatar:AVTR2,
    name:'Ram Yadav',
    review:'We hired him to help us build out the frontend of our React application and we could not be happier with the results. He is a skilled developer who was able to quickly understand our project. We highly recommend him to anyone looking for a reliable and talented frontend React developer.'
  },
  {
    avatar:AVTR3,
    name:'Aman Gupta',
    review:'I have worked with a number of frontend developers in the past, but he stands out as one of the best. Their understanding of React and its ecosystem is unparalleled, and they were able to quickly build out complex features that met all of our requirements. I would definitely work with him again in the future.'
  },
  {
    avatar:AVTR4,
    name:'Sangam Shrestha',
    review:'We were in a tight spot with our project and needed to find a frontend developer who could hit the ground running. He was the perfect fit for the job. They quickly became a valuable member of our team and were able to deliver high-quality code under tight deadlines. We are very happy with the work of his'
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