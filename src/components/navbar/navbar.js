// Named export
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
  <div className='fixed w-full bg-gray-100 bg-opacity-25 backdrop-blur-md shadow-lg p-4 z-10 top-0'>
  <nav className='container'>        
      <ul className='flex space-x-20 justify-end'>
        <li>
          <Link>
          Home
          </Link>  
        </li>
        <li>
          <Link>
          About
          </Link> 
        </li> 
        <li>
          <Link>
          Contact
          </Link>  
        </li>
      </ul>
    
  </nav>
</div>
  )
};
