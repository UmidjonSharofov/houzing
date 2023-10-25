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


import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



export const HouseItme = () => {
  const params = useParams()
  const id = params.id.slice(1)
  const url = import.meta.env.VITE_SOME_BASE_URL
  const [data, setData] = useState({})
  const token = localStorage.getItem('token')
  useEffect(() => {
    params?.id && axios.get(`${url}houses/id/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then((res) => {
      setData(res.data.data);
    })

  }, [id])
  console.log(data);

  return (
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
                  <div className=''>
                    <p className='sing_Title'>${data?.price}/mo</p>
                    <p className='info'>{data?.user?.firstname}</p>
                  </div>
                </div>
              </div>
              <div className='Description'>
                {data?.description || 'Description'}
              </div>
              <div className='Description mt'>Location</div>
            </div>
            <div>
              Darrel Steward
              (123)456-7890</div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default HouseItme

{/* <div>

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
  <div>
  </div>
</div>
</div>
<div>a</div> */}