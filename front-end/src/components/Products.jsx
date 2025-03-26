import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };
    fetchData();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.prodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-10">
      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-md"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {error ? (
          <p className="text-red-500 text-center col-span-3">
            Failed to load products. Try again later.
          </p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
        <div
        key={index}
        className="border border-gray-200 shadow-lg rounded-xl p-6 bg-white text-center cursor-pointer"
        onClick={() => navigate(`/product/${product.prodId}`)} // ✅ Pass correct ID
        >
        <h2 className="text-lg font-bold text-blue-700">{product.prodName}</h2>
        <p className="text-gray-500 italic">~ {product.category}</p>
        <p className="text-xl font-semibold text-blue-600">₹{product.amount}</p>
        <button
            onClick={(e) => {
            e.stopPropagation(); // Prevent redirect when clicking the button
            addToCart(product);
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
            Add to Cart
        </button>
        </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
