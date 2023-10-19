import { useState } from "react"
import { Button, Input } from "../Generic"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {
  const lOGIN_URL = import.meta.env.VITE_SOME_URL_LOGIN

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const navigate = useNavigate()

  const handle = (e) => {
    setPassword(e.target.value)
  }
  const Email = (e) => {
    setEmail(e.target.value)
  }
  const Firstname=(e)=>{
       setFirstname(e.target.value)
  }
  const Lastname=(e)=>{
    setLastname(e.target.value)
}

  const Login = () => {
    if(!email.includes('@gmail.com')||password.length<4){
      const notify = () => toast('Invalid email or password');
      notify()
    }
    axios.post(`${lOGIN_URL}register`, {
      'email': email,
      'firstname':firstname,
      'lastname':lastname,
      'password': password
    }).then((res) => {
      localStorage.setItem('token', res?.data?.authenticationToken)
      navigate('/')
      window.location.reload();
    }).catch((err) => {
      console.log(err.message);
      const notify = () => toast(err.message)
        notify()
    })
  }
  return (
    <div className="signin">
      <div className="signin_content">
        <div className="">
          <p className="sing_Title">Sing in</p>
        </div>
        <div className="signin_Input">
          <Input name='Email' onChange={Email} placeholder='Email' />
          <Input name='Firstname' onChange={Firstname} placeholder='First name' />
          <Input name='Lastname'  onChange={Lastname} placeholder='Last name' />
          <Input name='Passwort' type='password' onChange={handle} placeholder='Passwort' />
        </div>
        <div className="signin_Button">
          <Button onClick={Login}>Login</Button>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default SignUp
