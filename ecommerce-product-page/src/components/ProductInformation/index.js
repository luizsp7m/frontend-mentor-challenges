import { useApp } from "../../hooks/useApp";

import { Container } from "./styles";

export default function ProductInformation() {

  const { amount, setAmount, setProductInCart } = useApp();

  return (
    <Container>
      <h3>Sneaker Company</h3>

      <h1>Fall Limited <br /> Sneakers</h1>

      <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className="price-box">
        <div>
          <h1>$125.00</h1>
          <span>50%</span>
        </div>

        <h2>$250.00</h2>
      </div>

      <div className="input-group">
        <div className="input">
          <button onClick={() => amount > 0 && setAmount(amount - 1)}>
            <img src="/images/icon-minus.svg" alt="Minus" />
          </button>

          <label>{amount}</label>

          <button onClick={() => setAmount(amount + 1)}>
            <img src="/images/icon-plus.svg" alt="Plus" />
          </button>
        </div>

        <button onClick={() => setProductInCart(true)}>
          <img src="/images/icon-cart.svg" alt="Plus" />
          <span>Add to cart</span>
        </button>
      </div>
    </Container>
  );
}