import { NavLink, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
        <header>
            <nav className="flex flex-col bg-cyan-900 py-5 text-white px-20 fixed top-0 left-0 bottom-0 w-[250px]">
                <NavLink to='/'>Log In</NavLink>
                <NavLink to='/author'>Author</NavLink>
                <NavLink to='/categories'>Categories</NavLink>
                <NavLink to='/brands'>Brands</NavLink>
                <NavLink to='/cities'>Cities</NavLink>
                <NavLink to='/locations'>Locations</NavLink>
                <NavLink to='/cars'>Cars</NavLink>
                <NavLink to='/models'>Models</NavLink>
            </nav>
        </header>
        <main className="ml-[250px] p-5">
            <Outlet/>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Layout