import React from "react"
import Slider from "react-slick"
import { Typography,Box } from   "@mui/material"

export const ReactSlider = ({ carousels = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnHover: true,
    easing: "linear",
    swipe: true,
  }
  return (
    <Slider {...settings}>
      {carousels.map((caro, index) => (
        <Box key={index} className="relative">
          <img
            className="d-block img-fluid "
            src={caro.pic}
            style={{
              height: "auto",
              maxHeight: 403,
              width: "100%",

              objectFit: "cover",
            }}
            srcSet={`${caro.picSm} 300w,${caro.picMd} 600w,${caro.pic}  803w`}
            alt={caro.caption}
          />
        {caro.caption.length>0  ?  <div className="carousel-caption d-none d-md-block">
            <Typography
              style={{ color: "#fff", background: "purple", width: "100%" }}
              className="text-white py-2 "
              variant="h6"
            >
              {caro.caption}{" "}
            </Typography>
          </div> :null}
        </Box>
      ))}
    </Slider>
  )
}
