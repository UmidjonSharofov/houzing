import axios from "axios";
import { useEffect, useState } from "react";

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
import CategoryCart from "../Category_cart";
import { useNavigate } from "react-router-dom";

export const Category = () => {
    const url = import.meta.env.VITE_SOME_BASE_URL
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${url}categories/list`).then((res) => {
            setData(res?.data?.data)
        })
    }, [url, data])
    // console.log(data);

    return (
        <>
            <div className="Category">
                <div className="Recommended_title">
                    <h3 className="title">Category</h3>
                    <p className="sub_Title">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                </div>
                {data.length > 0 &&
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                        spaceBetween={4}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className='Swper'


                    >
                        {data.map(v => (
                            <SwiperSlide className="Category_flex" key={v.id}>
                                <CategoryCart onClick={() => navigate(`/properties?category_id=${v.id}`)} data={v} key={v.id} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </div>
            <div className="Recommended_media">
                <div className="gap">
                    {
                        data?.map(v => (
                            <CategoryCart onClick={() => navigate(`/properties?category_id=${v.id}`)} data={v} key={v.id} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Category
