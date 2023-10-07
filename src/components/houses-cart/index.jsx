import bathimg from '../../assets/icon/huses-cart/bath.svg'
import bedimg from '../../assets/icon/huses-cart/bed.svg'
import Group from '../../assets/icon/huses-cart/Group.svg'
import rulerImg from '../../assets/icon/huses-cart/ruler.svg'
import resize from '../../assets/icon/huses-cart/resize.svg'
import love from '../../assets/icon/huses-cart/love.svg'
import noImg from '../../assets/images/no_image.jpg'

const HousesCart = ({ url, title,bed,bath,garage,ruler,info }) => {
    return (
        <div className='Houses_Cart'>
            <div className='Houses_img'>
                <img src={url || noImg} alt="hosescart" />
            </div>
            <div className='Houses_wrapper'>
                <div className='Houses_title'>
                    <h3 className='sub_Title'>{title || "New Apartment Nice Wiew"}</h3>
                    <h4 className='info'>{info||'Quincy St, Brooklyn, NY, USA'}</h4>
                </div>
            </div>
            <div className='Detials'>
                <div className='Detials_Itme'>
                    <img src={bedimg} alt="" />
                    <p className='info'>Beds {bed||0}</p>
                </div>
                <div className='Detials_Itme'>
                    <img src={bathimg} alt="" />
                    <p className='info'>Baths {bath||0}</p>
                </div>

                <div className='Detials_Itme'>
                    <img src={Group} alt="" />
                    <p className='info'>Garage {garage||0}</p>
                </div>
                <div className='Detials_Itme'>
                    <img src={rulerImg} alt="" />
                    <p className='info'>Ruler {ruler ||0}</p>
                </div>
            </div>
            <div className='divider' />
            <div className='Houses_footer'>
                <div className='Houses_footer_title'>
                    <p className='info'>$2,800/mo</p>
                    <h3 className='sub_Title'>$7,500/mo</h3>
                </div>
                <div className='Houses_footer_img'>
                    <img src={resize} alt="resize" />
                    <img className='love' src={love} alt="love" />
                </div>
            </div>
        </div>
    )
}
export default HousesCart