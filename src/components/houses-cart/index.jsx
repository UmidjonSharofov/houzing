import bathimg from '../../assets/icon/huses-cart/bath.svg'
import bedimg from '../../assets/icon/huses-cart/bed.svg'
import Group from '../../assets/icon/huses-cart/Group.svg'
import rulerImg from '../../assets/icon/huses-cart/ruler.svg'
import resize from '../../assets/icon/huses-cart/resize.svg'
import love from '../../assets/icon/huses-cart/love.svg'
import noImg from '../../assets/images/no_image.jpg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FcLike } from 'react-icons/fc'
import axios from 'axios'
import { useSelector } from 'react-redux'
const url = import.meta.env.VITE_SOME_BASE_URL;


// eslint-disable-next-line react/prop-types
const HousesCart = ({ data = {}, onClick }) => {
    const token = localStorage.getItem('token')
    const refetch = useSelector((state) => state.RefetchReducer.refetch)
    const notify = () => toast('Successfully disliked');
    const notify2 = () => toast('Successfully liked');

    axios.interceptors.request.use(
        config => {
            config.headers.Authorization = `Bearer ${token}`
            return config
        },
        error => {
            return Promise.reject(error)
        }
        )


    const save = (event) => {
        event.stopPropagation() 
        window.location.reload
        axios.put(`${url}houses/addFavourite/${data?.id}?favourite=${!data.favorite}
            `, {
            headers: { 'Authorization': `Bearer ${token}` }

        })
        .then((res)=>{
            console.log(res);
             if(data?.favorite)res?.data?.success&& notify()
             else res?.data?.success&& notify2()
             
                

             
            refetch&&
            refetch()
        })
    }

    return (
        <div className='Houses_Cart_Wrapper' onClick={onClick}>
            <div className='Houses_img'>
                <img src={data?.attachments[0]?.imgPath || noImg} alt="hosescart" />
            </div>
            <div className='Houses_wrapper'>
                <div className='Houses_title'>
                    <h2 className='sub_Title inline' >{data?.city || 'city'},{data?.country || ""},{data?.description || ""}</h2>
                    <h4 className='info inline' >{data?.address || 'Quincy St, Brooklyn, NY, USA'} - {data?.category?.name || "category"} {data?.houseDetails?.room || 0}-rooms</h4>
                </div>
            </div>
            <div className='Detials'>
                <div className='Detials_Itme'>
                    <img src={bedimg} alt="" />
                    <p className='info'>Beds {data?.houseDetails?.beds || 0}</p>
                </div>
                <div className='Detials_Itme'>
                    <img src={bathimg} alt="" />
                    <p className='info'>Baths {data?.houseDetails?.bath || 0}</p>
                </div>

                <div className='Detials_Itme'>
                    <img src={Group} alt="" />
                    <p className='info'>Garage {data?.houseDetails?.garage || 0}</p>
                </div>
                <div className='Detials_Itme'>
                    <img src={rulerImg} alt="" />
                    <p className='info'>Area {data?.houseDetails?.area || 0} kv</p>
                </div>
            </div>
            <div className='divider' />
            <div className='Houses_footer'>
                <div className='Houses_footer_title'>
                    <p className='info'>${data?.salePrice || 0}/mo</p>
                    <h3 className='sub_Title'>${data.price || 0}/mo</h3>
                </div>
                <div className='Houses_footer_img'>
                    <img src={resize} alt="resize" />
                    {data?.favorite ?
                        <FcLike onClick={save} /> :
                        <img onClick={save} className={'like'} src={love} alt="love" />
                    }
                    <ToastContainer/>
                </div>
            </div>
        </div>

    )
}
export default HousesCart