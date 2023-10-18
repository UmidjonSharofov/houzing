import { Button } from '../Generic'
import bed from '../../assets/icon/carusel/bed.svg'
import bath from '../../assets/icon/carusel/bath.svg'
import Garage from '../../assets/icon/carusel/car.svg'
import ruler from '../../assets/icon/carusel/ruler.svg'

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
import media from '../../assets/images/medi/media.png'


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
                        <div className='Carousle_wrapper'>
                            <div className='carusel_title'>
                                <h1 className='subChild'>{`Skyper Pool Partment`}</h1>
                                <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
                            </div>
                            <div className='carusel_img'>
                                <div className='carusel_Itme'>
                                    <img src={bed} alt="bed" />
                                    <p className='info '>4 beds</p>
                                </div>
                                <div className='carusel_Itme'>
                                    <img src={bath} alt="bath" />
                                    <p className='info '>5 Baths</p>
                                </div>
                                <div className='carusel_Itme'>
                                    <img src={Garage} alt="Group" />
                                    <p className='info '>1 Garage</p>
                                </div>
                                <div className='carusel_Itme'>
                                    <img src={ruler} alt="ruler" />
                                    <p className='info '>1200 Sq Ft</p>
                                </div>
                            </div>
                            <div>
                                <Button wd={180} type={'dark'}>Read more</Button>
                            </div>
                        </div>
                        <div className='blur' />
                        <img src={Img2} alt="carousel" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='Carousle_wrapper'>
                            <div className='carusel_title'>
                                <h1 className='subChild'>{`Vermont Farmhouse With Antique Jail I the Week's Most Popular Home`}</h1>
                                <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
                            </div>
                            <div className='carusel_img'>
                                <div className='carusel_Itme'>
                                    <img src={bed} alt="bed" />
                                    <p className='info '>4 beds</p>
                                </div>
                                <div className='carusel_Itme'>
                                    <img src={bath} alt="bath" />
                                    <p className='info '>5 Baths</p>
                                </div>
                                <div className='carusel_Itme'>
                                    <img src={Garage} alt="Group" />
                                    <p className='info '>1 Garage</p>
                                </div>
                                <div className='carusel_Itme'>
                                    <img src={ruler} alt="ruler" />
                                    <p className='info '>1200 Sq Ft</p>
                                </div>
                            </div>
                            <div>
                                <Button wd={180} type={'dark'}>Read more</Button>
                            </div>
                        </div>
                        <div className='blur'>
                        </div>
                        <img src={Img1} alt="carousel" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='carusel_media'>
                    <div className='Carousle_wrapper'>
                        <div className='carusel_title'>
                            <h1 className='subChild'>{`Skyper Pool Partment`}</h1>
                            <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
                        </div>
                        <div className='carusel_img'>
                            <div className='carusel_Itme'>
                                <img src={bed} alt="bed" />
                                <p className='info '>4 beds</p>
                            </div>
                            <div className='carusel_Itme'>
                                <img src={bath} alt="bath" />
                                <p className='info '>5 Baths</p>
                            </div>
                            <div className='carusel_Itme'>
                                <img src={Garage} alt="Group" />
                                <p className='info '>1 Garage</p>
                            </div>
                            <div className='carusel_Itme'>
                                <img src={ruler} alt="ruler" />
                                <p className='info '>1200 Sq Ft</p>
                            </div>
                        </div>
                        <div>
                            <Button wd={180} type={'dark'}>Read more</Button>
                        </div>
                    </div>
                    <img src={media} alt="carousel" />
                </div>
        </div>
    )
}
export default Carousel