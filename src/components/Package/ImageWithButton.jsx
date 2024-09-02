import React from 'react';
import styled from 'styled-components'; // If using styled-components for styling

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #ffffff;
  border: 1px solid #333333;
  color: #333333;
  font-size: 16px;
  cursor: pointer;
`;

const ImageWithButton = () => {
  const handleClick = () => {
    // Handle button click event
    console.log('Button clicked');
  };

  return (
    <Container>
      <Image src="/path/to/your/image.jpg" alt="Description of the image" />
      <Button onClick={handleClick}>Click Me</Button>
    </Container>
  );
};

export default ImageWithButton;
