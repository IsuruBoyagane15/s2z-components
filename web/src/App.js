import React, { useState, useEffect } from 'react';
import './App.css';
import config from './config'; // Import the configuration


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderedProductIds, setOrderedProductIds] = useState([]);
  const [likedProductIds, setLikedProductIds] = useState([]);
  const [wishlistProductIds, setWishlistProductIds] = useState([]);


  useEffect(() => {
    // Define the URL for the inventory service endpoint
    const inventoryServiceURL = config.inventoryServiceURL;

    // Fetch the product list from the inventory service
    fetch(inventoryServiceURL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Update the state with the product list
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const handleOrderClick = (productId) => {
    // Define the URL for the order service endpoint (replace with the actual URL)
    const orderServiceURL = `${config.inventoryServiceURL}/${productId}/order`;

    // Make a POST request to place an order
    fetch(orderServiceURL, {
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 201) {
          // Order successfully placed, you can handle this as needed
          console.log(`Order placed for product ID ${productId}`);
          setOrderedProductIds([...orderedProductIds, productId]);
        } else {
          // Handle other response statuses or errors
          console.error(`Error placing order for product ID ${productId}`);
        }
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };


  const handleWishlistClick = (productId) => {
    // Define the URL for the wishlist service endpoint (replace with the actual URL)
    const wishlistServiceURL = `${config.inventoryServiceURL}/${productId}/wishlist`;

    // Make a POST request to wishlist the product
    fetch(wishlistServiceURL, {
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 201) {
          setWishlistProductIds([...wishlistProductIds, productId]);
          // Product wishlist successfully, you can handle this as needed
          console.log(`Wishlist product ID ${productId}`);
        } else {
          // Handle other response statuses or errors
          console.error(`Error wishslist product ID ${productId}`);
        }
      })
      .catch((error) => {
        console.error('Error wishlist product:', error);
      });
  };

  const handleLikeClick = (productId) => {
    // Define the URL for the like service endpoint (replace with the actual URL)
    const likeServiceURL = `${config.inventoryServiceURL}/${productId}/like`;

    // Make a POST request to like the product
    fetch(likeServiceURL, {
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 201) {
          setLikedProductIds([...likedProductIds, productId]);
          // Product liked successfully, you can handle this as needed
          console.log(`Liked product ID ${productId}`);
        } else {
          // Handle other response statuses or errors
          console.error(`Error liking product ID ${productId}`);
        }
      })
      .catch((error) => {
        console.error('Error liking product:', error);
      });
  };

  const isProductOrdered = (productId) => orderedProductIds.includes(productId);
  const isProductLIked = (productId) => likedProductIds.includes(productId);
  const isProductWishlisted = (productId) => wishlistProductIds.includes(productId);

  return (
    <div className="container">
      <h1>Marketplace</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product">
              <strong>{product.name}</strong>
              <div className="actions">
                { <button
                  className="wishlist-button"
                  onClick={() => handleWishlistClick(product.id)}
                >
                  {isProductWishlisted(product.id) ? 'In wishlist' : 'Add to wishlist'}
                </button> }
                  { <button
                  className="like-button"
                  onClick={() => handleLikeClick(product.id)}
                  >
                  {isProductLIked(product.id) ? 'Liked' : 'Like'}
                  </button> }
                  <button
                    className="order-button"
                    onClick={() => handleOrderClick(product.id)}
                  >
                    {isProductOrdered(product.id) ? 'Ordered' : 'Order'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
