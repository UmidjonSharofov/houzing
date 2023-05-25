import React from 'react'
import { Container, Content, Details, Diver, Icon, Img, } from './stayled'
import noImg from '../../assets/img/noimg.webp'


const HouseCart = ({ url, title,bed,beth,garage,ruler,info}) => {

    return (
        <Container>
            <Img src={url || noImg} />
            <Content>
                <div className='subTitle'>{title || 'New Apartment Nice Wiew'}</div>
                <div className="info">{info||"Quincy St, Brooklyn, NY, USA"}</div>
                <Details>
                    <Details.Itme>
                        <Icon.Bet />
                        <div className='info'>Beds {bed||0} </div>
                    </Details.Itme>
                    <Details.Itme>
                        <Icon.Beth />
                        <div className='info'> Baths {beth||0} </div>
                    </Details.Itme>
                    <Details.Itme>
                        <Icon.Garage />
                        <div className='info'>Garage {garage||0}</div>
                    </Details.Itme>
                    <Details.Itme>
                        <Icon.Ruler />
                        <div className='info'>Sq Ft {ruler||0} </div>
                    </Details.Itme>
                </Details>
            </Content>
             <Diver/>
             <Content footer >
                <Details.Itme footer>
                    <div className='info'>$2,800/mo</div>
                    <div className='title'>$7,500/mo</div>
                </Details.Itme>
                <Details.Itme row>
                    <Icon.Resize/>
                    <Icon.Love/>
                </Details.Itme>
             </Content>
            
        </Container>
    )
}

export default HouseCart