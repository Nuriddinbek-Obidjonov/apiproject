import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Layout from './layout/Layout'
import Login from './pages/Login'
import Author from './pages/Author'
import Categories from './pages/Categories'
import Brands from './pages/Brands'
import Cities from './pages/Cities'
import Locations from './pages/Locations'
import Cars from './pages/Cars'
import Models from './pages/Models'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/' element={<Login/>}/>
        <Route path='/author' element={<Author/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/locations' element={<Locations/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/models' element={<Models/>}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App