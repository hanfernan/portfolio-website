import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Background>
      <StyledHeader>

          Hello!
   
      
      </StyledHeader>
    </Background>
  );
}

const StyledHeader = styled.p`
  color: red;
`;

const Background = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

export default App;
