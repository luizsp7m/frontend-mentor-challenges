import { useState } from "react";

import { useApp } from "../../hooks/useApp";

import { Container } from "./styles";

export default function Header() {

  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { amount, productInCart, setProductInCart, setAmount } = useApp();

  function deleteProduct() {
    setAmount(0);
    setProductInCart(false);
  }

  return (
    <Container>
      <div className="left-side">
        <img className="menu" src="/images/icon-menu.svg" alt="Menu" onClick={() => setOpenMenu(true)} />

        <img className="logo" src="/images/logo.svg" alt="Logo" />

        <div className={`nav ${openMenu ? 'toggled' : ''}`}>
          <img className="close" src="/images/icon-close.svg" alt="Close" onClick={() => setOpenMenu(false)} />
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="right-side">
        <div className="cart">
          {amount > 0 && productInCart && <span className="number">{amount}</span>}
          <img className="cart" src="/images/icon-cart.svg" alt="Cart" onClick={() => setOpenCart(!openCart)} />
        </div>

        <img className="avatar" src="/images/image-avatar.png" alt="Avatar" />
      </div>

      {openCart && (
        <div className="cart">
          <h2>Cart</h2>

          {productInCart ? (
            <>
              <div className="product">
                <img className="product-image" src="/images/image-product-1-thumbnail.jpg" alt="Product" />

                <div>
                  <span>Fall Limited Edition Sneakers</span>
                  <span>$125 x {amount} <b>${(amount * 125).toFixed(2)}</b></span>
                </div>

                <img className="delete" src="/images/icon-delete.svg" alt="Delete" onClick={deleteProduct} />
              </div>

              <div>
                <button>Checkout</button>
              </div>
            </>
          ) : <p>Your cart is empty</p>}
        </div>
      )}


    </Container>
  );
}