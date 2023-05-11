import React from "react";
import Slider from "react-slick";
import Appimage from "./Appimage";
export default function AppCarousel({ items }) {

    var settings = {
        autoplaySpeed:3000,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1, arrows: false,
        appendDots: dots => {
            return <ul style={{ margin: "0px", bottom: '20px' }}>{dots}</ul>;
        },
    };
    return (
        <Slider {...settings} >
            <div style={{ height: "100%" }}>
                <Appimage src={"/static/image/auth_img.jpg"} />
            </div>
            <div style={{ height: "100%" }}>
                <Appimage src={"/static/image/auth_img1.png"} />
            </div>
            <div style={{ height: "100%" }}>
                <Appimage src={"/static/image/auth_img3.webp"} />
            </div>
            {/* <div height={'100%'}>
                <Appimage src={"/static/image/auth_img.jpg"} />
            </div> */}
            {/* {items.map((v, i) => {
                return (
                    <div key={i}>
                        <Appimage src={"/static/image/auth_img.jpg"} />
                    </div>
                )
            })} */}

        </Slider>
    );
}