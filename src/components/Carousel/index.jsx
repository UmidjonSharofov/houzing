import { Button } from '../Generic'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// img
import Img1 from '../../assets/images/carusle IMG1.png'
import Img2 from '../../assets/images/carusle IMG2.png'


const Carousel = () => {
    return (
        <div className='Container'>
            <div className='Carousel'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                    spaceBetween={80}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className='Swper'

                >
                    <SwiperSlide>
                        <div className='Carousle_title'>
                            <h1 className='subChild'>{`Vermont Farmhouse With Antique Jail I the Week's Most Popular Home`}</h1>
                        </div>
                        <div className='blur' />
                        <img src={Img2} alt="carousel" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='Carousle_title'>
                            <h1>{`Skyper Pool Partment`}</h1>
                            <Button >Read more</Button>
                        </div>
                        <div className='blur'>
                        </div>
                        <img src={Img1} alt="carousel" />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}
export default Carousel