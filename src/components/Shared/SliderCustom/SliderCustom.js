import React, {useState, useRef, useEffect} from 'react';
import "./SliderCustom.scss";
import { Image} from "semantic-ui-react";
import Slick from "react-slick";
import { Link } from "react-router-dom";

const settings  = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    centerMode: true,
    adaptiveHeight: true,
}

export function SliderCustom(props) {
    const {data, basePath } = props;
    const [size, setSize] = useState(0);
    const itemRef = useRef();
    
    useEffect(() => {
      if(itemRef.current) {
        setSize(itemRef.current.clientWidth);
      }
    }, [])

    return (
      <Slick {...settings} className="slider">
        {data.map((item, index) => {
          return (
            <Link to={`/${basePath}/${item.id}`} ref={itemRef} key={index} className="slider__item">
              <Image src={item.image} alt={item.name} style={{height: size}} />
              <h3>{item.name}</h3>
            </Link>
          );
        })}
      </Slick>
    )
}
