import img1 from '../../assets/images/houses_itme/unsplash_DyFjxmHt3Es.png'
import img2 from '../../assets/images/houses_itme/unsplash_eHD8Y1Znfpk.png'
import img3 from '../../assets/images/houses_itme/unsplash_p_kICQCOM4s.png'
import img4 from '../../assets/images/houses_itme/unsplash_VWcPlbHglYc.png'
import img5 from '../../assets/images/houses_itme/unsplash_ZtC4_rPCRXA (1).png'
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
          <div>s</div>

        </div>
      </div>
    </div>

  )
}

export default HouseItme
