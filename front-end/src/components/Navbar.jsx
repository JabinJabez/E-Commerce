import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-4">
      <div className="flex items-center space-x-6">
        <Link to="/">Jabin</Link>
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
        <select name="" id="">
          <option value="Categories">Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
        <button type='button' className='text-gray-400' disabled>Disabled</button>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/cart" className='font-bold'>Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar;
