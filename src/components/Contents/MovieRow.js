import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {SmoothHorizontalScrolling} from "../../Utils";
import {useViewport} from "../../hooks";
import movieList from "../data";
import axios from "axios";
const API_KEY = "e63d58702d899b95979a46ea0b0bd13b";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieRow(props) {
  // const listmovies = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHHovwjYeJzbBnQL6Fneh0SdaZppoiCQLpA&usqp=CAU",
  //   "https://genk.mediacdn.vn/2018/12/27/photo-1-15458898386971044005541.jpg",
  //   ,
  //   "https://genk.mediacdn.vn/2018/12/27/photo-1-1545889841484247241756.jpg",
  //   "https://bizweb.dktcdn.net/100/332/012/files/anh2-2de1b82d-913e-46fa-b233-c987d92430e2.png?v=1565536776597",
  //   "https://bizweb.dktcdn.net/100/332/012/files/anh3-e17aaaca-4800-4672-8e82-15c0b5d08881.png?v=1565536826615",
  //   "https://genk.mediacdn.vn/2018/12/27/photo-3-1545889841487631724582.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHHovwjYeJzbBnQL6Fneh0SdaZppoiCQLpA&usqp=CAU",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpVdKGZQQZKGHjQiQM_X4y0dwkH4fIHeCKg&usqp=CAU",
  //   "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-co-hinh-anh-nam-than.jpg?v=1580462359314",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU1PULkVO7OcB4tLhyhMfUT52IXOGYDVNDw&usqp=CAU",
  //   "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-harry-potter.jpg?v=1580793811703",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU1PULkVO7OcB4tLhyhMfUT52IXOGYDVNDw&usqp=CAU",
  //   "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-co-hinh-anh-nam-than.jpg?v=1580462359314",
  //   "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-co-trang-dien-hy-cong-luoc.jpg?v=1580462173770",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkXhiHGa95kTELvTmLNt6837bkHfz1HHmPw&usqp=CAU",
  //   "https://bizweb.dktcdn.net/100/332/012/files/poster-phim-truyen-hinh-doi-lap-tuong-phan.jpg?v=1580461882825",
  //   "https://bizweb.dktcdn.net/thumb/1024x1024/100/332/012/articles/untitledanh-2-5.png?v=1565404066103",
  //   "https://bizweb.dktcdn.net/100/332/012/files/untitled-181634a7-5cb3-433f-87b7-8ec9d3875005.png?v=1565536712570",
  // ];
  const sliderRef = useRef();
  const itemRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const {windowWidth} = useViewport();
  const {movies, title, isNetflix} = props;
  const handleScrollRight = () => {
    console.log(sliderRef.current.scrollWidth);
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft)
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        itemRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0)
      SmoothHorizontalScrolling(
        sliderRef.current,
        300,
        -(itemRef.current.clientWidth * 2),
        sliderRef.current.scrollLeft
      );
  };
  const onDragStart = (e) => {
    setDragDown(e.screenX);
    setIsDrag(true);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);
  useEffect(() => {
    try {
      axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_network=213`);
    } catch (err) {}
  }, []);
  return (
    <MovieRowContainer draggable="false">
      <h1 className="heading">{title}</h1>
      <MovieSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movieList.length > 0
            ? {
                gridTemplateColumns: `repeat(${movieList.length}, 
                  ${
                    windowWidth > 1200
                      ? "360px"
                      : windowWidth > 992
                      ? "300px"
                      : windowWidth > 768
                      ? "250px"
                      : "200px"
                  })`,
              }
            : {}
        }
      >
        {movieList.map((movie, index) => (
          <div
            key={index}
            className="movieItem"
            ref={itemRef}
            draggable="false"
          >
            <img src={movie} alt="" draggable="false" />
            <div className="movieName">Movie Name</div>
          </div>
        ))}
      </MovieSlider>
      <div className={`btnSlider btnSlider_left ${isNetflix && "isNetflix"}`}>
        <BsChevronLeft onClick={handleScrollLeft} />
      </div>
      <div className={`btnSlider btnSlider_right ${isNetflix && "isNetflix"}`}>
        <BsChevronRight onClick={handleScrollRight} />
      </div>
    </MovieRowContainer>
  );
}
const MovieRowContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px 20px 0 20px;
  position: relative;
  width: 100%;
  height: 100%;
  .heading {
    font-size: 18px;
    user-select: none;
  }
  .btnSlider {
    font-size: 40px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 20;
    width: 30px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.3s linear;
      transform-origin: center;
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.6;
      transition: all 0.3s linear;
    }
  }
  .isNetflix {
    width: 40px;
    height: 70px;
  }
  .btnSlider_left {
    left: 30px;
  }
  .btnSlider_right {
    right: 50px;
  }
`;
const MovieSlider = styled.div`
  display: grid;
  gap: 5px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 30px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.5;
  }

  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 450px;
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    &:hover {
      opacity: 1;
      transform: scale(1.2);
      z-index: 10;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      padding: 4px;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
export default MovieRow;
