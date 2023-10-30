import img1 from '../../assets/images/houses_itme/unsplash_DyFjxmHt3Es.png'
import img2 from '../../assets/images/houses_itme/unsplash_eHD8Y1Znfpk.png'
import img3 from '../../assets/images/houses_itme/unsplash_p_kICQCOM4s.png'
import img4 from '../../assets/images/houses_itme/unsplash_VWcPlbHglYc.png'
import img5 from '../../assets/images/houses_itme/unsplash_ZtC4_rPCRXA (1).png'

import bath from '../../assets/icon/huses-cart/bath.svg'
import bed from '../../assets/icon/huses-cart/bed.svg'
import ruler from '../../assets/icon/huses-cart/ruler.svg'
import Group from '../../assets/icon/huses-cart/Group.svg'
import calendar from '../../assets/icon/huses-cart/calendar 1.svg'

import love from '../../assets/icon/housus_itme/love 1.svg'
import share from '../../assets/icon/housus_itme/share 1.png'

import user from '../../assets/images/medi/user.png'

// Features img
import air from '../../assets/icon/features/air-conditioner 1.svg'
import barbecue from '../../assets/icon/features/barbecue 1.svg'
import blinds from '../../assets/icon/features/blinds.svg'
import chair from '../../assets/icon/features/chair.svg'
import coaxial from '../../assets/icon/features/coaxial.svg'
import dryer from '../../assets/icon/features/dryer.svg'
import dumbbell from '../../assets/icon/features/dumbbell.svg'
import grass from '../../assets/icon/features/grass 1.svg'
import laundry from '../../assets/icon/features/laundry.svg'
import liquid from '../../assets/icon/features/liquid-soap.svg'
import microwave from '../../assets/icon/features/microwave.svg'
import outdoor from '../../assets/icon/features/outdoor-shower.svg'
import sauna from '../../assets/icon/features/sauna.svg'
import swimmer from '../../assets/icon/features/swimmer.svg'
import wifi from '../../assets/icon/features/wifi.svg'
import refrigerator from '../../assets/icon/features/refrigerator.svg'


import { useEffect, useState } from "react"
import { Input, Button } from '../Generic/index'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Checkbox } from 'antd';
import Yandex from '../Generic/map'
import Recernt from '../Recent'



export const HouseItme = () => {
  const params = useParams()
  const id = params.id.slice(1)
  const url = import.meta.env.VITE_SOME_BASE_URL
  const [data, setData] = useState({})



  useEffect(() => {
    params?.id && axios.get(`${url}houses/id/${id}`).then((res) => {
      setData(res.data.data);
      window.scrollTo(0, 0)
    })

  }, [id])
  console.log(data);
  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <div className="HouseItme_Container">
            <div className="HouseItme_img">
              <img className='IMG' src={data?.attachments ? data?.attachments[0]?.imgPath : img5} alt="" />
              <div className='HouseItme_img_grit'>
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img1} alt="" />
                <img src={img4} alt="" />
              </div>
            </div>
            <div className='HouseItme_img'>
              <div className='HouseItme_wrapper'>
                <div className='HouseItme_img'>
                  <div className='HouseItme_title'>
                    <h3 className='title'>{data?.name || 'name'}</h3>
                    <p className='info'>{data?.city} , {data?.address} , {data?.country}</p>
                  </div>
                  <div className='HouseItme_icon'>
                    <img src={share} alt="" />
                    <p>Share</p>
                    <img src={love} alt="" />
                    <p>Save</p>
                  </div>
                </div>
                <div className='HouseItme_img'>
                  <div className='HouseItme_icon'>
                    <div className='icon_itme'>
                      <img src={bed} alt="" />
                      <p className='info'>Beds {data?.houseDetails?.beds || 0}</p>
                    </div>
                    <div className='icon_itme'>
                      <img src={bath} alt="" />
                      <p className='info'>Baths {data?.houseDetails?.bath || 0}</p>
                    </div>
                    <div className='icon_itme'>
                      <img src={Group} alt="" />
                      <p className='info'>Garage {data?.houseDetails?.garage || 0} </p>
                    </div>
                    <div className='icon_itme'>
                      <img src={ruler} alt="" />
                      <p className='info'>Sq Ft {data?.houseDetails?.area || 0}</p>
                    </div>
                    <div className='icon_itme'>
                      <img src={calendar} alt="" />
                      <p className='info'>Year Built: {data?.houseDetails?.yearBuilt}</p>
                    </div>
                  </div>
                  <div className='huses_information'>
                    <div className='info '>
                      <del>${data?.salePrice || 0}/ mo</del>
                    </div>
                    <div>
                      <p className='title'>${data?.price}/mo</p>
                      <p className='info'>{data?.user?.firstname}</p>
                    </div>
                  </div>
                </div>
                <div className='Description'>
                  <p className='sing_Title'>Description</p>
                  <p>{data?.description || 'Description'}</p>
                </div>
                <div className='sing_Title mt'>Features
                  <div className='HouseItme_img '>
                    <section>
                      <div className='Features'>
                        <img src={air} alt="" />
                        <p className='info'>Air Conditioning</p>
                      </div>
                      <div className='Features'>
                        <img src={barbecue} alt="" />
                        <p className='info'>Barbeque</p>
                      </div>
                      <div className='Features'>
                        <img src={dryer} alt="" />
                        <p className='info'>Dryer</p>
                      </div>
                      <div className='Features'>
                        <img src={dumbbell} alt="" />
                        <p className='info'>Gym</p>
                      </div>
                    </section>
                    <section>
                      <div className='Features'>
                        <img src={grass} alt="" />
                        <p className='info'>Lawn</p>
                      </div>
                      <div className='Features'>
                        <img src={laundry} alt="" />
                        <p className='info'>Laundry</p>
                      </div>
                      <div className='Features'>
                        <img src={microwave} alt="" />
                        <p className='info'>Microwave</p>
                      </div>
                      <div className='Features'>
                        <img src={outdoor} alt="" />
                        <p className='info'>Outdoor Shower</p>
                      </div>
                    </section>
                    <section>
                      <div className='Features'>
                        <img src={refrigerator} alt="" />
                        <p className='info'>Refrigerator</p>
                      </div>
                      <div className='Features'>
                        <img src={sauna} alt="" />
                        <p className='info'>Sauna</p>
                      </div>
                      <div className='Features'>
                        <img src={swimmer} alt="" />
                        <p className='info'>Swimming Pool</p>
                      </div>
                      <div className='Features'>
                        <img src={coaxial} alt="" />
                        <p className='info'>TV Cable</p>
                      </div>
                    </section>
                    <section>
                      <div className='Features'>
                        <img src={liquid} alt="" />
                        <p className='info'>Washer</p>
                      </div>
                      <div className='Features'>
                        <img src={wifi} alt="" />
                        <p className='info'>WiFi</p>
                      </div>
                      <div className='Features'>
                        <img src={blinds} alt="" />
                        <p className='info'>Window Coverings</p>
                      </div>
                      <div className='Features'>
                        <img src={chair} alt="" />
                        <p className='info'>Dining room</p>
                      </div>
                    </section>
                  </div>
                </div>
                <div>
                  <Yandex />
                </div>
              </div>
              <div className='user'>
                <div className='user_info'>
                  <div className='user_img'>
                    <img src={user} alt="user_img" />
                  </div>
                  <div className='user_title'>
                    <div className='sub_Title'>Webbrain Academy</div>
                    <div className='info'>99 122 00 00</div>
                  </div>
                </div>
                <Input placeholder='Name' />
                <Input placeholder='Phone' />
                <Input placeholder='Email' />
                <Input placeholder='Message' />
                <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
                <Button type='%'>Send request</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recernt />
    </>

  )
}

export default HouseItme

