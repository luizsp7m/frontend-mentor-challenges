import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  position: relative;
  height: 100px;

  > div.left-side {
    display: flex;
    align-items: center;
    gap: 5rem;

    > img.menu {
      display: none;
    }

    > div.nav {
      display: flex;
      align-items: center;
      gap: 3rem;

      > img.close {
        display: none;
      }

      > a {
        font-size: 1.6rem;
        color: #8C8F94;
        text-decoration: none;
        position: relative;

        &:hover::after {
          content: "";
          position: absolute;
          right: 0;
          left: 0;
          bottom: -40px;
          height: 3px;
          background: #FF7D1B;
        }
      }
    }
  }

  > div.right-side {
    display: flex;
    align-items: center;
    gap: 5rem;

    > img {
      cursor: pointer;
    }

    > img.avatar {
      width: 45px;
      height: auto;
    }

    > div.cart {
      position: relative;

      > img {
        cursor: pointer;
      }

      > span {
        position: absolute;
        right: -1rem;
        top: -1rem;
        background: #FF7D1B;
        color: #fff;
        padding: .2rem .7rem;
        font-weight: bold;
        border-radius: .7rem;
      }
    }
  }

  > div.cart {
    position: absolute;
    top: 85px;
    right: 0;
    border-radius: .5rem;
    border: 1px solid rgba(0, 0, 0, .05);
    width: 360px;
    background: #fff;

    > p {
      padding: 5rem 2rem;
      font-size: 1.6rem;
      color: #8C8F94;
      font-weight: 700;
      text-align: center;
    }

    > h2 {
      color: #1F2025;
      padding: 2rem;
      font-size: 1.45rem;
      font-weight: bold;
      border-bottom: 1px solid rgba(0, 0, 0, .05);
    }

    > div.product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      gap: 1.25rem;

      > img.product-image {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
        border-radius: .5rem;
      }

      > img {
        cursor: pointer;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 5rem;

        > span {
          font-size: 1.6rem;
          color: #8C8F94;

          > b {
            color: #1F2025;
          }
        }
      }
    }

    > div {
      padding: 1rem 2rem 2rem 2rem;

      > button {
        background: #FF7D1B;
        width: 100%;
        padding: 2rem;
        border: 0;
        outline: 0;
        border-radius: .55rem;
        color: #fff;
        font-weight: bold;
        font-size: 1.35rem;
        cursor: pointer;
        transition: opacity .25s;

        &:hover {
          opacity: .85;
        }
      }
    }
  }

  @media(max-width: 835px) {
    padding: 0 3rem;

    > div.left-side {
      gap: 2rem;

      > img.menu {
        display: block;
      }

      > div.nav {
        display: none;
      }

      > div.nav.toggled {
        display: flex;
        flex-direction: column;
        position: fixed;
        background: #f0f0f5;
        top: 0;
        bottom: 0;
        left: 0;
        right: 30%;
        min-height: 100vh;
        padding: 100px 0;
        align-items: flex-start;
        padding-left: 3.1rem;
        z-index: 100;

        > img.close {
          display: block;
          position: absolute;
          top: 4rem;
        }

        > a {
          font-weight: 700;
        }
      }
    }

    > div.right-side {
      gap: 2rem;
    }

    > div.cart {
      display: flex;
      flex-direction: column;
      z-index: 1;
      left: 0;
      right: 0;
      top: 12rem;
      margin: 0 auto;
      width: 90%;
    }
  }
`;
