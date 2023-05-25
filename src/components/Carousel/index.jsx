import React ,{useRef} from 'react'
import { Arrow, Blur, Container, Content, Img } from './stayled'
import { Carousel } from 'antd';
import houzing from '../../assets/img/houzing.png'
import houzing1 from '../../assets/img/houzing1.png'
import houzing2 from '../../assets/img/houzing2.png'

const GenCarousel = () => {
    const Ref=useRef()
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const onMove =({target:{dataset:{name}}})=>{
         if(name==='right') Ref.current.next();
         if(name==='left') Ref.current.prev();
    }
    return (
        <Container>
            <Carousel ref={Ref} afterChange={onChange}>
                <Img src={houzing} />
                <Img src={houzing1} />
                <Img src={houzing2} />
            </Carousel>
            <Blur/>
            <Content>
                <h1>Skyper Pool Partment</h1>
                <h3>112 Glenwood Ave Hyde Park, Boston, MA</h3>
                <Content.Price>$5,250/mo</Content.Price>
            </Content>
            <Arrow onClick={onMove} data-name='left' />
            <Arrow onClick={onMove} data-name='right' right />

        </Container>
    )
}

export default GenCarousel