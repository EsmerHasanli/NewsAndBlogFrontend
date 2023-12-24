import { Outlet } from "react-router-dom";
import Navbar from "../../components/User/Navbar/Navbar";
import Footer from "../../components/User/Footer";

const UserRoot = () => {
  
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default UserRoot