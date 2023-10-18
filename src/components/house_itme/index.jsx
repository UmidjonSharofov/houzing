// import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export const HouseItme = () => {
    const params=useParams()
     const id=params.id.slice(1)
    const url = import.meta.env.VITE_SOME_BASE_URL
    const [data, setData] = useState({ })
    const token=localStorage.getItem('token')
    useEffect(() => {
      params?.id && axios.get(`${url}houses/id/${id}`,{
        headers: { 'Authorization': `Bearer ${token}` }
      }).then((res) => {
        setData(res.data.data);
      })
  
    }, [id])

    console.log(data);
  return (
    <div>
      HouseItme</div>

  )
}

export default HouseItme
