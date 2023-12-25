import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/User/Navbar/Navbar";
import Footer from "../../components/User/Footer";

const UserRoot = () => {
  const location = useLocation();
  const { pathname } = location;
  
  return (
    <>
    {
      pathname !=="*" ? (
        <>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </>
      ) : null
    }
    </>
  )
}

export default UserRoot