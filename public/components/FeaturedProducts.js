import React from 'react';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$19.99',
      image: 'product1.jpg'
    },
    {
      title: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$24.99',
      image: 'product2.jpg'
    }
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      {featuredProducts.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="product-price">{product.price}</p>
          <a href="#" className="cta-button">Add to Cart</a>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;
