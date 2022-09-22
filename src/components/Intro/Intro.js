import React, {useState} from "react";
import ReactPlayer from "react-player";
import {GoMute, GoUnmute} from "react-icons/go";
import styled from "styled-components";
function Intro(props) {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100% "
        volume={0.7}
        muted={isMuted}
        url="https://vimeo.com/295446657"
        className="videoIntro"
      />
      <div className="InfoIntro">
        <h1 className="headingIntro">Netflix Elite</h1>
        <p className="overviewIntro">
          Bất chợt hiểu ra hai điều quan trọng của đời người: Một là chuẩn bị
          cho sự nghiệp, hai là tìm kiếm được tình yêu. Khi mặt trời mọc sẽ dồn
          sức vào sự nghiệp. Khi mặt trời lặn sẽ ôm lấy người mình yêu...
        </p>
      </div>
      {isMuted ? (
        <GoMute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <GoUnmute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
}
const IntroContainer = styled.div`
  background-color: #333;
  position: relative;
  color: #fff;
  padding-top: 56%;
  z-index: 1;
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }
  .InfoIntro {
    position: absolute;
    top: 140px;
    left: 30px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }
    .headingIntro {
      font-size: 60px;
      transition: all 0.3s;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 25px;
      }
    }
    .overviewIntro {
      max-width: 500px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .btnVolume {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: 10%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    border: #fff solid 1px;
    color: #ccc;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.3);
    }
    @media screen and (max-width: 800px) {
      width: 30px;
      height: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 600px) {
      width: 20px;
      height: 20px;
      padding: 2px;
    }
  }
  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;
export default Intro;
