import React from 'react';
import background from "../assets/login.jpg";
import styled from 'styled-components';

const Backgroundimage = () => {
  return (
    <Container>
      <img src={background} alt='bgimage'/>
    </Container>
  )
}

const Container=styled.div`
  height:100vh;
  width:100vw;
  img{
    height:100vh;
    width:100vw;
  }
`;

export default Backgroundimage;