import React from 'react';
import styled from 'styled-components';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// import video from "../assets/videolink"

const Player = () => {
    const navigate=useNavigate();
   const videoId = "l5OAxkuq850";
   const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <Container>
      <div className="Player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        {/* <video src={name} autoPlay loop controls muted ></video> */}
        <iframe
          title="YouTube Video"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Player;
const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;