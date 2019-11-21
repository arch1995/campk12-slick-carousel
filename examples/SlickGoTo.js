import React from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0
  };

  go = () => {
    this.slider.slickGoTo(10);
  };

  next = () => {
    this.slider.slickGoTo(5);
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };
    return (
      <div>
        <h2>Slick Go To</h2>
        <p>Total updates: {this.state.updateCount} </p>
        <button onClick={this.go}>asdsd</button>
        <button onClick={this.next}>assadasddsd</button>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src={baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          {/* <div>12</div> */}
        </Slider>
      </div>
    );
  }
}
