import React, { useState } from 'react';
const navigationdata = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Portfolio', path: '/portfolio' },
  { id: 5, name: 'Contact', path: '/contact' }
];

 
const Navbar = () => {
const [open , setopen] = useState(false);

const links =   navigationdata.map(route =>
            <ul className="flex gap-2 p-4"> 
             <li className='mr-1 '><a href= {route.path}>{route.name}</a> 
              </li></ul> )

    return (
      <nav>
      
        <h1 className='ml-25'>My Navbar</h1>
          
      <ul className='flex justify-center'>
        {
                 links
        }
      </ul>
       
        

      </nav>
    );
};

export default Navbar;