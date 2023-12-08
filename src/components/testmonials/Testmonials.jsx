import Slider from "react-slick";
import "./testmonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const reviews = [
  {
    name: "لمياء ناصر",
    location: "الرياض، السعودية",
    text: "طلبت واحد قبل يومين وصلي اليوم تماما متل ماشفت بالإعلان ، يعطيكم العافية ",
    id: "https://cdn.a2rev.com/images/a2-evjzeqkwgqygzy98.jpeg",
  },
  {
    name: "شيماء العنزي",
    location: "القصيم، السعودية",
    text: "الله يوفقكم وصلني المنتج وجربته يعمل بشكل جيد",
    id: "https://reviews.am-usercontent.com/images/u/o/f5cc27c5f814689c3b26b4ee90015301f287f670/ali-images/ec8af67218144e9893ebb36c9ff1107b.jpeg",
  },
  {
    name: "خديجة ريان",
    location: "عسير، السعودية",
    text: "منتج ممتاز الصراحة طلبت قطعتين عرض الأصدقاء ووصلوني بعد يومين",
    id: "https://cdn.a2rev.com/images/a2-j3tfdw5wzmtun6je.webp",
  },
  {
    name: "اسراء محمد",
    location: "مكة، السعودية",
    text: "👍جودة المنتج والأداء ممتاز مقارنة بالسعر",
    id: "https://cdn.a2rev.com/images/a2-v4epacsqpqw18xx1.jpeg",
  },
  {
    name: "شروق عبدالله",
    location: "الرياض، السعودية",
    text: "💓ممتاز وصلني خلال يومين من الطلب شكراً لكم",
    id: "https://reviews.am-usercontent.com/images/u/o/058cc6eb57fdc2e7c6b975376f821c8fad6daa91/ali-images/b6082db423dd42f0a2e60866e4c81f27.jpeg",
  },
  {
    name: "تسنيم فهد",
    location: "الرياض، السعودية",
    text: "منتج ممتاز واكتر شيء عجبني رأس الكيرلر. يلف الشعر بشكل تلقائي🥰",
    id: "https://ae01.alicdn.com/kf/Ae4d4271748124faea383bb94a26de683d.jpg",
  },
];

const Testmonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <section id="testmonialsId">
      <h2>ثقة أكثر من +5000 سيدة</h2>
      <div className="container rev-container">
        <div>
          <Slider {...settings}>
            {reviews.map((revv) => (
              <div className="rev-card" key={revv.id}>
                <div className="img-container">
                  <img className="rev-image" src={revv.id} alt="review_image" />
                </div>
                <p className="rev-name">{revv.name}</p>
                <p className="rev-loc">{revv.location}</p>
                <div className="rate">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text">{revv.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const CustomPrevArrow = (props) => (
  <div className="custom-slick-arrow custom-slick-prev" onClick={props.onClick}>
    <FaArrowAltCircleLeft />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-slick-arrow custom-slick-next" onClick={props.onClick}>
    <FaArrowAltCircleRight />
  </div>
);

export default Testmonials;
