import React from "react";
import {AiOutlineFire} from "react-icons/ai";
import {MdTheaterComedy} from "react-icons/md";
import {AiFillStar, AiFillFire} from "react-icons/ai";
import {GiGhost, GiRomanToga, GiDistraction} from "react-icons/gi";
import {FaToiletPaper} from "react-icons/fa";
import styled from "styled-components";
import {RiHomeSmileFill} from "react-icons/ri";
import MenuItem from "./MenuItem";
function Menu(props) {
  return (
    <MenuPanes>
      <MenuItem name="Home" Icon={RiHomeSmileFill} Color={"#84f8e1"} />
      <MenuItem name="Trending" Icon={AiFillFire} Color={"#c8bf41"} />
      <MenuItem name="Top Rated" Icon={AiFillStar} Color={"#ebe130"} />
      <MenuItem name="Actions Movies" Icon={GiDistraction} Color={"#37ec14"} />
      <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} Color={"#e13585"} />
      <MenuItem name="Horror Movies" Icon={GiGhost} Color={"#4a5c5e"} />
      <MenuItem name="Romance Movies" Icon={GiRomanToga} Color={"#b568aa"} />
      <MenuItem name="Documentaries" Icon={FaToiletPaper} Color={"#9685df"} />
    </MenuPanes>
  );
}
const MenuPanes = styled.div`
  position: fixed;
  left: 0px;
  top: 30%;
  padding: 3px 0;
  width: 45px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  &:hover {
    width: 170px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .subMenu {
    display: flex;
    margin-left: 4px;
    align-items: center;
    padding: 4px 6px;
    cursor: pointer;
    width: max-content;
    .icon {
      font-size: 30px;
      margin-right: 8px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: #fff;
      }
    }
  }
`;
export default Menu;
