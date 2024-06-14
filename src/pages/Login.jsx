import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  
  const API = 'https://documenter.getpostman.com/view/24974792/2s935oL3qs#a3140778-856f-46f3-be53-8899ea983868'
  
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const logInSite = (e) => {
    e.preventDefault()
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
        navigate('/home')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="mt-40">
        <form action="" className="mx-auto flex flex-col text-center w-[30%] p-10 bg-gray-300">
            <input type="number" placeholder="Enter your number" min={3} className="border-2 border-cyan-700 my-5" onChange={(e) => setPhone(e.target.value)}/>
            <input type="password" placeholder="Enter your password" min={3} className="border-2 border-cyan-700 my-5" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="border-2 border-cyan-700 my-5" onSubmit={() => logInSite()}>Submit</button>
        </form>
    </div>
  )
}

export default Login