import {Container} from './style'

// eslint-disable-next-line react/prop-types
const Input = ({ onChange, wd, hd, FS, br, type,placeholder,name,value ,defaultValue}) =>{
  return (
    <div>
            <Container  placeholder={placeholder} name={name} value={value} defaultValue={defaultValue}  br={br} onChange={onChange} FS={FS} wd={wd} hd={hd} type={type} />
        
    </div>
  )
}

export default Input
