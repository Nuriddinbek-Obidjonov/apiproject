import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function Cars() {

  const APICARS = 'https://autoapi.dezinfeksiyatashkent.uz/api/categories/'
  const urlImages = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'

  const [cars, setCars] = useState([])
  const [createCar, setCreateCar] = useState(false)
  const [editCarModal, setEditCarModal] = useState(false)
  const [editCarId, setEditeCarId] = useState('')
  const [a, setA] = useState(0)

  // Fetching all car's information
  useEffect(() => {
    fetch(APICARS).then((res) => res.json()).then((data) => {
      setCars(data.data)
    }).catch((err) => console.log(err))
  }, [a])

  // Creating car to use adding or editing
  const [car, setCar] = useState({name_en: '', name_ru: '', images: ''})

  // Adding new car
  const addCar = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    formData.append('name_en', car.name_en)
    formData.append('name_ru', car.name_ru)
    formData.append('images', car.images)

    fetch(APICARS, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === true) {
        toast.success('New car was added!')
        setA(a + 1)
      } else if (data.success === false) {
        toast.error('Ooops, we detected some problem, try again later!')
      }
    })
    .catch((err) => console.log(err))
  }

  // Editing car
  const editCar = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    formData.append('name_en', car.name_en)
    formData.append('name_ru', car.name_ru)
    formData.append('images', car.images)

    fetch(`${APICARS}${editCarId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === true) {
        toast.success('The car was edited!')
        setA(a + 1)
      } else if (data.success === false) {
        toast.error('Ooops, we detected some problem, try again later!')
      }
    })
    .catch((err) => console.log(err))
  }
  
  // Deleteing car
  const deleteCar = (e) => {
    
    fetch(`${APICARS}${e.target.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === true) {
        toast.success('The car was deleted!')
        setA(a + 1)
      } else if (data.success === false) {
        toast.error('Ooops, we detected some problem, try again later!')
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <div className="flex justify-between font-semibold py-3 items-center">
        <span className="text-xl">Cars</span>
        <button className="bg-green-300 rounded px-5 py-1" onClick={() => {
          setCreateCar(true)
        }}>Add Car</button>
      </div>

      {/* Adding new car form */}
      <div id="add_car_modal" className={`${createCar ? '' : 'hidden'} p-5 bg-gray-300/20 backdrop-blur fixed top-0 left-0 right-0 bottom-0 z-[100]`} onClick={(e) => {
            if (e.target == document.getElementById('add_car_modal')) {
              setCreateCar(false)
            }
          }}>
        <form onSubmit={(e) => {
            addCar(e)
            setCreateCar(false)
          }} className="flex flex-col w-[500px] bg-gray-300 p-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <input type="text" placeholder="name_uz" required onChange={(e) => {
            setCar({...car, name_en: e.target.value})
          }} className="border-2 border-cyan-700 my-5 p-1"/>
          <input type="text" placeholder="name_ru" required onChange={(e) => {
            setCar({...car, name_ru: e.target.value})
          }} className="border-2 border-cyan-700 my-5 p-1"/>
          <input type="file" required onChange={(e) => {
            setCar({...car, images: e.target.files[0]})
          }} className="border-2 border-cyan-700 my-5"/>
          <button type="submit" className="border-2 border-cyan-700 my-5 bg-green-400">ADD</button>
        </form>
      </div>

      {/* Editing car form */}
      <div id="edit_car_modal" className={`${editCarModal ? '' : 'hidden'} p-5 bg-gray-300/20 backdrop-blur fixed top-0 left-0 right-0 bottom-0 z-[100]`} onClick={(e) => {
            if (e.target == document.getElementById('edit_car_modal')) {
              setEditCarModal(false)
            }
          }}>
        <form onSubmit={(e) => {
            editCar(e)
            setEditCarModal(false)
          }} className="flex flex-col w-[500px] bg-gray-300 p-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <input type="text" placeholder="name_uz" required onChange={(e) => {
            setCar({...car, name_en: e.target.value})
          }} className="border-2 border-cyan-700 my-5 p-1"/>
          <input type="text" placeholder="name_ru" required value={car.name_ru} onChange={(e) => {
            setCar({...car, name_ru: e.target.value})
          }} className="border-2 border-cyan-700 my-5 p-1"/>
          <input type="file" required onChange={(e) => {
            setCar({...car, images: e.target.files[0]})
          }} className="border-2 border-cyan-700 my-5"/>
          <button type="submit" className="border-2 border-cyan-700 my-5 bg-green-400">EDIT</button>
        </form>
      </div>

      {/* Table of information */}
      <table className="border-separate border w-full">
        <thead>
          <tr className="bg-cyan-100">
            <th className="border px-5 py-1">Color</th>
            <th className="border px-5 py-1">Brand</th>
            <th className="border px-5 py-1">Location</th>
            <th className="border px-5 py-1">Model</th>
            <th className="border px-5 py-1">Category</th>
            <th className="border px-5 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {cars && cars.map((car, i) => {
            return (
              <tr key={i}>
                <td className="border px-5 py-1">{car.name_en}</td>
                <td className="border px-5 py-1"><img src={`${urlImages}${car.image_src}`} alt="image" width={100}/></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button id={car.id} className="bg-blue-400 rounded mx-1 p-1 w-[80px]" onClick={(e) => {
                    setEditeCarId(e.target.id)
                    setEditCarModal(true)
                  }}>Edit</button>
                  <button id={car.id} className="bg-red-400 rounded mx-1 p-1 w-[80px]" onClick={deleteCar}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
      <ToastContainer />
    </div>
  )
}

export default Cars