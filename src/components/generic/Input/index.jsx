import React, { forwardRef } from 'react'
import { Container, Icon, Wrapper } from './styled'

const Input = forwardRef(({ icon, FS, wd, hd, type, onChange, placeholder, name, value, defaultValue }, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        wd={wd}
        hd={hd}
        type={type}
        value={value}
        defaultValue={defaultValue}
        FS={FS}
        icon={icon}
      />
    </Wrapper>
  )
})
export default Input