import React from "react";
import "./header.css";
import CTA from "./CTA";
import hero from "../../assets/hero.png";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header id="headerId">
      <div className="container header--container">
        <img src={logo} alt="logo_image" className="logo" />
        <h5>متجر زينون يقدم</h5>
        <h1 className="main-heading">مجموعة تصفيف الشعر 5 في 1</h1>
        <h5 className="text-light slogan">
          جميع ستايلات الشعر بدون تلف بدون تقصف، <br /> الرفيق المثالي لتصفيف
          الشعر
        </h5>
        <CTA />
        <div className="hero">
          <img src={hero} alt="product_image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
