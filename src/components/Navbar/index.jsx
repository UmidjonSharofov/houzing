import React from 'react'
import { Container, Link, Logo, Main, Section, Wrapper } from './styled'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'


export const Navbar = () => {
  const navget = useNavigate()
  return (
    <Container>
      <Main>

        <Wrapper>
          <Section onClick={() => navget('/home')} logo>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {
              navbar.map(({ title, path, id }, index) => {
                return <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>
              })
            }
          </Section>
          <Section><button>bos</button></Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}

export default Navbar
