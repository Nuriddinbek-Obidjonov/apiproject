import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  
  const API = 'https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin'
  
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const logInSite = (e) => {
    e.preventDefault()

    document.getElementById('phone').value = ''
    document.getElementById('password').value = ''

    fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            phone_number: phone,
            password: password
        })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('success')
        navigate('/author')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="mt-40">
        <form onSubmit={logInSite} className="mx-auto flex flex-col text-center w-[40%] min-w-[300px] p-10 bg-gray-300">
            <input id="phone" type="number" placeholder="Enter your number" min={3} className="border-2 border-cyan-700 my-5" onChange={(e) => setPhone(e.target.value)}/>
            <input id="password" type="password" placeholder="Enter your password" min={3} className="border-2 border-cyan-700 my-5" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="border-2 border-cyan-700 my-5">Submit</button>
        </form>
    </div>
  )
}

export default Login