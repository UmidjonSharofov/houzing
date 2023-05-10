import React from 'react'
import { Container } from './styled'

export const Input = ({ children, FS ,wd, hd, type, onChange, placeholder, name ,value,defaultValue}) => {
  return (
    <Container onChange={onChange}
      placeholder={placeholder}
      name={name}
      wd={wd}
      hd={hd}
      type={type}
      value={value}
      defaultValue={defaultValue}
      FS={FS}
       />
  )
}

export default Input