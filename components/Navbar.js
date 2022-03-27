import {useState} from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
              <a href="/" className="hover:text-gray-700">Food Ninja</a>
            </h1>
            <div className="px-4 cursor-pointer md:hidden" onClick={() => setActive(!active)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
          <ul className={`text-sm mt-6 ${active ? 'block' : 'hidden'} md:block`}>
            <li className='text-gray-700 font-bold mr-2 px-4 border-r-4 border-primary'>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li className="py-1 px-4 mr-2 1 border-r-4 border-white">
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li className="py-1 px-4 mr-2 1 border-r-4 border-white">
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar