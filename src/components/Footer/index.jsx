import pin from '../../assets/icon/footer/pin.svg'
import phone from '../../assets/icon/footer/phone.svg'
import email from '../../assets/icon/footer/email 1.svg'

import f from '../../assets/icon/footer/f.svg'
import e from '../../assets/icon/footer/e.svg'
import i from '../../assets/icon/footer/i.svg'
import In from '../../assets/icon/footer/in.svg'

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="Wrapper">
                <div className='Footer_Container'>
                    <div className="Footer_wrapper">
                        <div className="Footer_h3">Contact Us</div>
                        <div className="Footer_img">
                            <img src={pin} alt="pin" />
                            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                        </div>
                        <div className="Footer_img">
                            <img src={phone} alt="phone" />
                            <p>123 456 7890</p>
                        </div>
                        <div className="Footer_img">
                            <img src={email} alt="email" />
                            <p>support@houzing.com</p>
                        </div>
                        <div className="Footer_svg">
                            <img src={f} alt="email" />
                            <img src={e} alt="email" />
                            <img src={i} alt="email" />
                            <img src={In} alt="email" />
                        </div>
                    </div>
                    <div className="Footer_wrapper">
                        <div className="Footer_h3">Discover</div>
                        <div className="Footer_title">
                            <p>Chicago</p>
                            <p>Los Angeles</p>
                            <p>Miami</p>
                            <p>New York</p>
                        </div>
                    </div>
                    <div className="Footer_wrapper">
                        <div className="Footer_h3">Lists by Category</div>
                        <div className="Footer_title">
                            <p>Apartments</p>
                            <p>Condos</p>
                            <p>Houses</p>
                            <p>Offices</p>
                            <p>Retail</p>
                            <p>Villas</p>
                        </div>
                    </div>
                    <div className="Footer_wrapper">
                        <div className="Footer_h3">Lists by Category</div>
                        <div className="Footer_title">
                            <p>About Us</p>
                            <p>Terms & Conditions</p>
                            <p>Support Center</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer