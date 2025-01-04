import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

export const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

export const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Upgrade your wardrobe with the latest styles and enjoy up to 50% off on all men's wear. Don’t miss out on this limited-time offer!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Discover elegant and trendy women's wear at unbeatable prices. Shop now and enjoy a fabulous 30% discount!",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "The sale of the season is here! Grab your favorite products with an incredible discount of up to 70%. Hurry, while stocks last!",
  },
];
