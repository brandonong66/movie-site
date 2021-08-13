import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image from '../images/starwars1.jpg'
import "./Carousel.css"

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:true
    };
    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div align="center">
          <img src={image} width="300" />
            <h3>item 1</h3>
          </div>
          <div align="center">
          <img src={image} width="300" />
            <h3>item 2</h3>
          </div>
          <div align="center">
          <img src={image} width="300" />
            <h3>item 3</h3>
          </div>
          <div>
            <h3>item 4</h3>
          </div>
          <div>
            <h3>item 5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}