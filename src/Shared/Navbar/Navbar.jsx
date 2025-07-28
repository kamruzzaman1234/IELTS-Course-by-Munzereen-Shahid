import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Navbar = ()=>{

    return(
        <div>
            <div className="navbar max-w-[1400px] mx-auto w-full">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">Class 6-12</summary>
          <ul className="p-2 z-[999]">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">স্কিলস</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">ভর্তি পরীক্ষা
আরো</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">অনলাইন ব্যাচ</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">
ইংলিশ সেন্টার</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">আরো</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
    <div className="flex gap-3 md:flex-row lg:flex-row items-center">
        <Link to="/" className="sm:w-[100px] md:w-[90px] md:h-[30px]
         sm:h-[30px] lg:w-[100px] lg:h-[35px]">
         <img src="https://i.ibb.co/BV8dCcT6/pthopea.jpg"
         className="w-full h-full object-cover" alt="" />
    </Link>
    <div>
 <fieldset className="fieldset relative">

    <input type="text" className="input hidden md:block
     lg:block sm:w-[100%]  lg:w-[320px] rounded-full pl-[5px]
    lg:pl-[40px] md:px-[30px] pr-[5px] lg:pr-[20px]"
    placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..." />
    <IoIosSearch className="absolute left-[12px] hidden md:block lg:block
    text-[18px] font-semibold text-black top-[15px]"/>

</fieldset>
    </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">Class 6-12</summary>
          <ul className="p-2 z-[999]">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">স্কিলস</summary>
          <ul className="p-2 z-[999]">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">ভর্তি পরীক্ষা
আরো</summary>
          <ul className="p-2 z-[999]">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">অনলাইন ব্যাচ</summary>
          <ul className="p-2 z-[999]">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">
ইংলিশ সেন্টার</summary>
          <ul className="p-2 z-[999]">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

       <li>
        <details>
          <summary className="text-gray-500 font-semibold text-[16px]">আরো</summary>
          <ul className="p-2 z-[999]">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center sm:gap-2 lg:gap-4">
        <select name="" id="" className="border-1 hidden lg:block border-gray-200">
      <option value="en">EN</option>
      <option value="bn">Bn</option>
    </select>
    <div className="flex hidden lg:block items-center gap-2">
        <IoCall className="text-green-400"/>
        <h4 className="text-green-400">16910</h4>
    </div>
    <button  className="btn bg-green-400
    text-white rounded-lg font-bold">Login</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Navbar;