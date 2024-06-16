import React from "react";
import   {Link, NavLink}   from "react-router-dom";

const NavTwo = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <nav className="self-center fixed top-0 w-full max-w-7xl shadow bg-black">
          <div className="flex justify-between items-center text-white">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
              tailwind
            </h1>
            <ul className="hidden md:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <NavLink className='text-white text-decoration-none' to="/">Home</NavLink>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <NavLink className='text-white text-decoration-none' to="/contact">Contact</NavLink>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <NavLink className='text-white text-decoration-none' to="/services">Services</NavLink>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <NavLink className='text-white text-decoration-none' to="/about">About</NavLink>
              </li>
              {/* <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <NavLink to="/pricing">Pricing</NavLink>
              </li> */}
            </ul>
            <button className="block p-3 mx-10 md:hidden hover:bg-black rounded-xl group">
              <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-white"></div>
              <div className="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-black group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <NavLink to="/">Contacts</NavLink>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <NavLink to="/">Services</NavLink>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <NavLink to="/">About</NavLink>
                  </li>
                  {/* <li className="hover:border border-white py-4 px-6 w-full">
                    <NavLink to="/">Pricing</NavLink>
                  </li> */}
                </ul>
              </div>
            </button>
          </div>
        </nav>
      </div>
      {/* <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> */}
    </div>
  );
};

export default NavTwo;
