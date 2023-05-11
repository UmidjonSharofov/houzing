import React from 'react'
import { Container, Icon, MenuWrapper, Section } from './styled'
import { Input, Button } from '../generic'
import { Dropdown } from 'antd'
import { useRef } from 'react'

export const Filter = () => {
  const CountryRef=useRef()
  const RegionRef=useRef()
  const CityRef=useRef();
  const ZipcodeRef=useRef()

  const RoomsRef=useRef()
  const SizeRef=useRef()
  const SortRef=useRef()

  const MinpriceRef=useRef()
  const MaxpriceRef=useRef()

  const menu = <MenuWrapper>
    <h2 className='subTitle'>Address</h2>
    <Section>
      <Input ref={CountryRef}  placeholder={'Country'} />
      <Input ref={RegionRef}  placeholder={'Region'} />
      <Input ref={CityRef}  placeholder={'City'} />
      <Input ref={ZipcodeRef}  placeholder={'Zip code'} />
    </Section>
    <h2 className='subTitle'>Apartment info</h2>
    <Section>
      <Input ref={RoomsRef} placeholder={'Rooms'} />
      <Input ref={SizeRef} placeholder={'Size'} />
      <Input ref={SortRef} placeholder={'Sort'} />
    </Section>
    <h2 className='subTitle'>Price info</h2>
    <Section>
      <Input ref={MinpriceRef} placeholder={'Min price'} />
      <Input ref={MaxpriceRef} placeholder={'Max price'} />
    </Section>

    <Section></Section>
  </MenuWrapper>

  return (
    <Container>
      <Input icon={<Icon.Houses />} placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
      <Dropdown overlay={menu} placement="bottomRight" arrow={{ pointAtCenter: true }}>
        <div>
          <Button type={'light'}><Icon.Filter /> Advanced</Button>
        </div>
      </Dropdown>
      <Button> <Icon.Search /> Search</Button>
    </Container>
  )
}

export default Filter
