import axios from "axios";
import { useEffect, useState } from "react";
import HousesCart from "../houses-cart";
// import { useNavigate } from "react-router-dom";

// Import Swiper React components
// import Swiper core and required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export const Recernt = () => {
    const url = import.meta.env.VITE_SOME_BASE_URL
    const [data, setData] = useState([])
    // const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${url}houses/list`).then((res) => {
            setData(res?.data?.data)
        })
    }, [url, data])
    // console.log(data);

    return (
        <div className="Recommended">
            <div className="Recommended_title">
               <h3 className="title">Recent Properties for Rent</h3>
               <p className="sub_Title">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            </div>
            {data?.length > 0 &&
                <Swiper
                    slidesPerView={3}
                    spaceBetween={150}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="Swper"
                >
                    {
                        data?.map((v) => (
                            <SwiperSlide key={v.id}>
                                <HousesCart data={v} />
                            </SwiperSlide>

                        ))
                    }

                </Swiper>
            }
        </div>
    )
}

export default Recernt
