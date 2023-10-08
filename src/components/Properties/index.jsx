import axios from "axios"
import { useEffect, useState } from "react"
import HoseCart from '../houses-cart'
import { useLocale } from "antd/es/locale"
import { useLocation } from "react-router-dom"

const Properties = () => {
  const url = import.meta.env.VITE_SOME_BASE_URL
  const [data, setData] = useState([])
  const{search}=useLocation()

  useEffect(() => {
    axios.get(`${url}houses/list${search}`).then((res) => {
      setData(res?.data?.data)
    })
  }, [search])
console.log(data,"a");
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Properties">
          <HoseCart data={data}/>
        </div>
      </div>
    </div>
  )
}
export default Properties