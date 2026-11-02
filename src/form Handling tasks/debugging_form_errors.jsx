import { useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        let newErrors = {};
        let hasError = false;

        if (productName.trim() === "") {
            newErrors.productName = "Product name is required";
            hasError = true;
        }

        if (price.trim() === "") {
            newErrors.price = "Price is required";
            hasError = true;
        }

        if (category.trim() === "") {
            newErrors.category = "Category is required";
            hasError = true;
        }

        setErrors(newErrors);

        if (hasError) {
            return;
        }

        setProducts([
            ...products,
            {
                productName: productName,
                price: price,
                category: category
            }
        ]);

        setProductName("");
        setPrice("");
        setCategory("");
    }

    return (
        <div>
            <h1>Product Registration</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />

                {errors.productName && (
                    <p style={{ color: "red" }}>
                        {errors.productName}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                {errors.price && (
                    <p style={{ color: "red" }}>
                        {errors.price}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                {errors.category && (
                    <p style={{ color: "red" }}>
                        {errors.category}
                    </p>
                )}

                <button type="submit">
                    Add Product
                </button>
            </form>

            {products.length === 0 ? (
                <h2>No Products Added</h2>
            ) : (
                products.map((product, index) => (
                    <div key={index}>
                        <p>Product: {product.productName}</p>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default App;