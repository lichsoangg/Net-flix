import React, {useEffect, useState} from "react";
import NetflixLogo from "../../assets/images/logo.png";
import {GoSearch} from "react-icons/go";
import styled from "styled-components";
import "../../App.css";
import {useScrollY} from "../../hooks";
const Navbar = (props) => {
  const [scrollY] = useScrollY();
  return (
    <Navigation
      style={
        scrollY < 50
          ? {backgroundColor: "transparent"}
          : {backgroundColor: "#333"}
      }
    >
      <div className="navContainer">
        <div className="logo">
          <img src={NetflixLogo} alt="" />
        </div>
        <div className="navSearch">
          <div className="iconSearch">
            <GoSearch />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Input title,genres,people"
          />
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;
const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 10;
  @media screen and (max-width: 600px) {
    height: 100px;
  }
  .navContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background-color: transparent;
    height: 100%;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }
    .logo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .navSearch {
      color: white;
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: #ccc;
      }
      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(30px) translateY(12px);
        color: #fff;
      }
      input {
        font-size: 14px;
        border: 1px solid white;
        color: white;
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background-color: #222;
        transition: width 0.7s;
        &:focus {
          width: 300px;
          padding-left: 30px;
          opacity: 1;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;
