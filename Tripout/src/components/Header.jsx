import { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <header className="absolute w-full z-30 bg-transparent flex items-center justify-between px-6 md:px-10 xl:px-44 py-6">
                <Logo/>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium ">
                    <Link to="/">Home</Link>
                    <a href="#about">About Us</a>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <button className="rounded-full p-3 border-2 border-gray-800 border-opacity-40 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search fill-gray-800" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                    <Link to="#" className="rounded-full bg-[#F7921E] text-white px-6 py-3 text-sm font-medium">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person inline-block" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg> &nbsp;
                            <span>LOG IN / SIGN UP</span>
                        </button>
                    </Link>
                </div>

                <button onClick={toggleSidebar} className="lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                </svg>
                </button>

                {/* Sidebar for Mobile */}
                <div
                    className={`lg:hidden block fixed inset-y-0 right-0 z-40 w-full bg-black opacity-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                        onClick={toggleSidebar}
                ></div>
                <div
                    className={`lg:hidden block fixed inset-y-0 right-0 z-40 w-64 bg-[#24201D] transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform delay-200 duration-300 ease-in-out`}
                >
                    <button onClick={toggleSidebar} className="absolute top-2 right-2 text-white p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                        </svg>
                    </button>
                    <nav className="flex flex-col items-start px-6 pt-20 text-white space-y-6 text-lg">
                        <Link to="/" onClick={toggleSidebar}>Home</Link>
                        <a href="#about" onClick={toggleSidebar}>About Us</a>
                        <Link to="destinations" onClick={toggleSidebar}>Destinations</Link>
                        <Link to="blog" onClick={toggleSidebar}>Blog</Link>
                        <Link to="contact" onClick={toggleSidebar}>Contact Us</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;