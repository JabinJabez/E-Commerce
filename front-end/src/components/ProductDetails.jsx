import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(true);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <img src={product.imageUrl} alt={product.prodName} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4 text-blue-600">{product.prodName}</h2>
      <p className="text-gray-500 italic">Category: {product.category}</p>
      <p className="text-xl font-semibold text-blue-600">Price: ₹{product.amount}</p>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="mt-2 font-semibold">Stock Available: {product.stockAvailable}</p>
    </div>
  );
};

export default ProductDetails;
