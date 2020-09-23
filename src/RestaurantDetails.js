import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';


class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantities: props.restaurant.menu.reduce(
        (result, menuItem) => ({
          ...result,
          [menuItem.item]: 0,
        }),
        {},
      ),
    };
  }

  change = delta => item => () => {
    this.setState(oldState => ({
      quantities: {
        ...oldState.quantities,
        [item]: oldState.quantities[item] + delta,
      },
    }));
  };

  submitOrder = () => {
    alert(
      `Thank you for your order of the following delicious JSON:\n
  ${JSON.stringify(this.state.quantities)}\n
(This is the end of the demo)`,
    );
  };

  render() {
    const {
      menu,
      name,
      imageSrc,
      imageDescription,
      description,
    } = this.props.restaurant;

    const total = menu.reduce(
      (sum, menuItem) =>
        sum + this.state.quantities[menuItem.item] * menuItem.price,
      0,
    );

    return (
      <div className="app-product-page">
        <div id="header">
          <img src="https://awik.io/demo/webshop-zoom/star_logo.png" />
          Product Page
        </div>

        <div className="columns">
          <div className="column">
            <div className="thumbnail-container">
              <img
                className="drift-demo-trigger"
                data-zoom="https://awik.io/demo/webshop-zoom/shoe-large.jpg"
                src="https://awik.io/demo/webshop-zoom/shoe-small.jpg"
              />
            </div>
          </div>

          <div className="column">
            <div className="details">
              <h1>Air Jordan 1 Retro</h1>
              <p className="price">$95.99</p>
              <p className="description">
                A remarkable shoe that's naturally soft, cozy all over, and fits
                your every move.
              </p>

              <div className="columns">
                <div className="column" id="wishlist-container">
                  <button className="button">
                    <span className="icon is-small">
                      <i className="fas fa-heart"></i>
                    </span>
                    <span>ADD TO WISHLIST</span>
                  </button>
                </div>

                <div className="column" id="buy-container">
                  <button className="button buy-button">
                    <span className="icon is-small">
                      <i className="fas fa-shopping-bag"></i>
                    </span>
                    <span>ADD TO BAG</span>
                  </button>
                </div>
              </div>

              <p className="small-text">
                <span>Standard delivery</span> 2-5 working days
              </p>
              <p className="small-text">
                <span>Next day delivery</span> order before 2pm ($5.79)
              </p>
            </div>
          </div>
        </div>

        <p className="small-text style-1">
          About Us
          <a href="" target="_blank">
            Contact Us
          </a>
        </p>
      </div>
    );
  }
}
export default RestaurantDetails;
