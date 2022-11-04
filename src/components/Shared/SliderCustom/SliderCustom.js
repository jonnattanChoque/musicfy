import React, {useState, useEffect, useRef} from 'react';
import "./SliderCustom.scss";
import { Image, Icon} from "semantic-ui-react";
import Slick from "react-slick";
import { Link } from "react-router-dom";

const settings  = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    centerMode: true,
}

export function SliderCustom(props) {
    const {data, basePath } = props;
    
    return (
      <Slick {...settings} className="slider">
        {data.map((item) => {
          return (
            <Link to={`/${basePath}/${item.id}`} key={item.id} className="slider__item">
              <Image src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </Link>
          );
        })}
      </Slick>
    )
}
