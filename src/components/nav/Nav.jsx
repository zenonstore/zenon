/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.css";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BiSolidDetail } from "react-icons/bi";
import { RiUserStarFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

const Nav = ({ activeLink, setActiveLink }) => {
  return (
    <nav>
      <a
        onClick={() => setActiveLink("headerId")}
        href="#"
        className={activeLink === "headerId" ? "active" : ""}>
        <BiSolidHomeCircle />
      </a>
      <a
        onClick={() => setActiveLink("#infoId")}
        href="#infoId"
        className={activeLink === "infoId" ? "active" : ""}>
        <BiSolidDetail />
      </a>
      <a
        onClick={() => setActiveLink("#guaranteesId")}
        href="#guaranteesId"
        className={activeLink === "guaranteesId" ? "active" : ""}>
        <AiFillLike />
      </a>
      <a
        onClick={() => setActiveLink("#testmonialsId")}
        href="#testmonialsId"
        className={activeLink === "testmonialsId" ? "active" : ""}>
        <RiUserStarFill />
      </a>
      <a
        onClick={() => setActiveLink("#order-form")}
        href="#order-form"
        className={activeLink === "order-form" ? "active" : ""}>
        <FaCartPlus />
      </a>
    </nav>
  );
};

export default Nav;
