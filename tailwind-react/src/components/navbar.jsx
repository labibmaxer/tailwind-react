import React from 'react';
const navigationdata = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Portfolio', path: '/portfolio' },
  { id: 5, name: 'Contact', path: '/contact' }
];

 
const Navbar = () => {
    return (
      <nav>
      <ul className='flex'>
        {
        navigationdata.map(route =>
            <ul className="flex gap-6 p-4"> 
             <li className='mr-10 '><a href= {route.path}>{route.name}</a> 
              </li></ul> )
        }
      </ul>
       
        

      </nav>
    );
};

export default Navbar;