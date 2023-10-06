import { Container } from './style'
import { forwardRef } from 'react'

// eslint-disable-next-line react/prop-types, react/display-name
export const Input=forwardRef(({ onChange, wd, hd, FS, br, type, placeholder, name, value, defaultValue, icon }, ref) => {
  return (
    <div>
      <Container ref={ref} icon={icon} placeholder={placeholder} name={name} value={value} defaultValue={defaultValue} br={br} onChange={onChange} FS={FS} wd={wd} hd={hd} type={type} />
    </div>
  )
})
export default Input
