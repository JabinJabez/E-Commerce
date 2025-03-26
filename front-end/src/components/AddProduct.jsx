import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        prodName: "",
        amount: "",
        rating: "",
        category: "",
        imageUrl: "",
        description: "",
        stockAvailable: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.prodName || !product.amount || !product.category) {
            setMessage("Please fill in all required fields.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/products/add-product", product);
            console.log("Product added:", response.data);
            setMessage("Product added successfully!");
            setProduct({ prodName: "", amount: "", rating: "", category: "", imageUrl: "", description: "", stockAvailable: "" });
        } catch (error) {
            console.error("Error adding product:", error.response?.data || error);
            setMessage("Failed to add product. Try again.");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center text-blue-600">Add New Product</h2>

            {message && <p className="text-center mt-2 text-red-500">{message}</p>}

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                    type="text"
                    name="prodName"
                    placeholder="Product Name"
                    value={product.prodName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="number"
                    name="amount"
                    placeholder="Amount (₹)"
                    value={product.amount}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={product.rating}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={product.category}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={product.imageUrl}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <textarea
                    name="description"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                ></textarea>

                <input
                    type="number"
                    name="stockAvailable"
                    placeholder="Stock Available"
                    value={product.stockAvailable}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;