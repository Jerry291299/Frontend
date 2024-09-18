import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { IUser } from "../interface/user";
import logo from "./img/Corgi Toys 1980.png";
type Props = {};

const Header = (props: Props) => {
  const [user, setUser] = useState<{ info: string } | null>(null);
  const Navigate = useNavigate()

  useEffect(() => {
    const userData: any = sessionStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
   
  }, []);
  

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    Navigate("/")
  };
  return (
    <>
      <header className="flex bg-sky-100 shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex  items-center justify-between gap-5 w-full">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="w-36" />
          </NavLink>
          <div className="header1 ">
            <div className="flex">
              <input
                type="search"
                placeholder="Search..."
                className="w-full p-2 px-[80px] border-2 rounded-full"
              ></input>
              <button className="ml-[10px] px-5 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                Search
              </button>
            </div>
          </div>

          <div className=" items-center ">
            {user ? (
              <>
              <div className="mt-[10px] items-center">
                <span className="px-4 py-2 text-sm rounded-full font-bold text-gray-700 border-2 border-[#007bff]">
                  {user?.info}
                </span>
                <NavLink to={"/cart"}>
                <button className="my-[9px] ml-[9px] px-4 py-1 border-2 font-bold border-[#007bff] rounded-full duration-300 hover:bg-transparent hover:text-[#007bff] ease-in-out">My cart</button>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 ml-[9px] text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
                >
                  Logout
                </button>
                
              </div>
                
                

                
              </>
            ) : (
              <>
                <NavLink to={"/login"}>
                  <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                    Login
                  </button>
                </NavLink>
                <NavLink to={"/register"}>
                  <button className="px-4 py-2 ml-[15px] text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                    Sign up
                  </button>
                </NavLink>
              </>
            )}
            <button id="toggleOpen" className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="Menu py-[20px] bg-sky-200 flex justify-center items-center">
        {/* 
        <div className="absolute left-0">
          <div className="shopbycategory border-2 bg-sky-900 py-2 text-white px-4 rounded-xl">Shop by Categories</div>
        </div> */}

        <div className="">
          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="w-36"
              />
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <NavLink to={"/"}
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                Home ﹀
              </NavLink>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <NavLink
                to={"/Productspage/Product"}
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                {" "}
                Products ﹀{" "}
              </NavLink>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#"
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Feature ﹀
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#"
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Blog ﹀
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#"
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                About ﹀
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <NavLink
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                to={"/admin"}
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
