import React from 'react';

const CheckoutList = props => {
  const { product } = props;

  return (
    <div className="Cart-items">
      <div className="cart-item-container">
        <div className="product-info">
          <span className="item-name">
            <span className="product-name">{product.productName}</span>
            <span className="product-option">{product.productOption}</span>
          </span>
          <span className="price-and-delete">{product.quantity} 개</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
