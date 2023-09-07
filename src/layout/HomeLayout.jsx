import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



const HomeLayput = ({ children }) => {
    
    function changeWidth() {
        const menu = document.getElementsByClassName('drawer-side');
        menu[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName('drawer-toggle');
        element[0].checked = false;

        const menu = document.getElementsByClassName('drawer-side');
        menu[0].style.width = 'auto';

        // changeWidth()
    }

    return (
        <div className=' min-h-[90vh] '>
            <div className="drawer absolute left-0 z-50 w-fit">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="relative"><FiMenu size={"32px"} className=' font-bold cursor-pointer m-4 text-white' onClick={changeWidth} /></label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 min-h-full bg-base-200  relative text-base-content">
                        <li className='w-fit absolute right-2 z-50'>
                            <button className=' cursor-pointer' onClick={hideDrawer}>
                                <AiFillCloseCircle size={24}  />
                            </button>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/coures'>All Coureses</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                        <li>
                            <Link to='/aboutus'>About Us</Link>
                        </li>

                    </ul>
                </div>

            </div>
            {children}
            <Footer/>
        </div>
    )
}

export default HomeLayput
