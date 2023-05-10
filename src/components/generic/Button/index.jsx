import React from 'react'
import { Container } from './styled'

export const Button = ({children,wd,hd,FS,type,onClick}) => {
  return (
    <Container onClick={onClick}  FS={FS} wd={wd} hd={hd} type={type} >{children||'Generic Button'}</Container>
  )
}

export default Button