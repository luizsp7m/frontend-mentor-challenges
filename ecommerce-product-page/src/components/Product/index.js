import {  useState } from "react";

import Modal from "../Modal";

import { Container, ProductImage, Gallery } from "./styles";

export default function Product() {

  const images = [{
    id: 0, url: "/images/image-product-1.jpg",
  }, {
    id: 1, url: "/images/image-product-2.jpg",
  }, {
    id: 2, url: "/images/image-product-3.jpg",
  }, {
    id: 3, url: "/images/image-product-4.jpg",
  }];

  const [displayImage, setDisplayImage] = useState(images[0]);

  const [modalOpen, setModalOpen] = useState(false);

  function Carousel(param) {
    if (param === 'next') {
      if (displayImage.id >= images.length - 1) {
        setDisplayImage(images[0]);
      } else {
        setDisplayImage(images[displayImage.id + 1]);
      }
    } else {
      if (displayImage.id <= 0) {
        setDisplayImage(images[images.length - 1]);
      } else {
        setDisplayImage(images[displayImage.id - 1]);
      }
    }
  }

  function getWindowDimensions() {
    const { innerWidth: width } = window;

    if(innerWidth > 768) {
      setModalOpen(true);
    }    
  }

  return (
    <Container>
      {modalOpen && (
        <Modal>
          <button onClick={() => setModalOpen(false)}>
            <img src="/images/icon-close.svg" alt="Close" />
          </button>

          <ProductImage data-aos="zoom-in" displayButton={true} modalIsOpen={modalOpen}>
            <button className="previous" onClick={() => Carousel('previous')}>
              <img src="/images/icon-previous.svg" alt="Previous" />
            </button>

            <img src={displayImage.url} alt="Product Image" />

            <button className="next" onClick={() => Carousel('next')}>
              <img src="/images/icon-next.svg" alt="Next" />
            </button>
          </ProductImage>

          <Gallery data-aos="zoom-in">
            {images.map((image, index) => <img
              src={image.url}
              alt="Product"
              onClick={() => setDisplayImage(image)}
              key={index}
              className={`${displayImage.id === image.id ? 'selected' : ''}`}
            />)}
          </Gallery>
        </Modal>
      )}

      <ProductImage data-aos="fade-right" displayButton={false} onClick={getWindowDimensions}>
        <button className="previous" onClick={() => Carousel('previous')}>
          <img src="/images/icon-previous.svg" alt="Previous" />
        </button>

        <img src={displayImage.url} alt="Product Image" />

        <button className="next" onClick={() => Carousel('next')}>
          <img src="/images/icon-next.svg" alt="Next" />
        </button>
      </ProductImage>

      <Gallery data-aos="fade-right">
        {images.map((image, index) => <img
          src={image.url}
          alt="Product"
          onClick={() => setDisplayImage(image)}
          key={index}
          className={`${displayImage.id === image.id ? 'selected' : ''}`}
        />)}
      </Gallery>
    </Container>
  );
}