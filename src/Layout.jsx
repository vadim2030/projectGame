import Header from "./Header.jsx"
import { Outlet } from "react-router-dom"
import "./scss/style.scss";


function Layout() {
  return (
    <>
      <Header />
      <h1 className='style'>Second round </h1>
      <Outlet />

    </>
  )
}

export default Layout
