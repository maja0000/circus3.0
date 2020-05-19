import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ModalGallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Gallery</h2>
        <Slider {...settings}>
          <div>
            <div
              style={{
                height: '450px',
                width: '90%',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1572252698222-3ce9dcc32888?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                height: '450px',
                width: '90%',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1435034568314-8303dbda4b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                height: '450px',
                width: '90%',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1547423753-bff7561e2956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div>
            <div
              style={{
                height: '450px',
                width: '90%',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518709714596-a74c92304b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div>
            <div
              style={{
                height: '450px',
                width: '90%',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544448826-fa3ccf3acfc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div>
            <div
              style={{
                height: '450px',
                width: '90%',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544441452-326ff5a947fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
