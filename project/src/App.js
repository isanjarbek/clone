import React from 'react'
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import AppRouter from './components/AppRouter';

import Title from './styledcomp/Title';
import Flex from './styledcomp/Flex';
import Console from './styledcomp/Console';
import Button from './styledcomp/Button';

import styled from 'styled-components'


const ApWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 2rem;
background: grey;
`
function App() {
  return (
    // <BrowserRouter>
    //     <Navbar/>
    //     <AppRouter/>
    // </BrowserRouter>
    <ApWrapper>
      <Flex justify="center" align="center">
        <Title color={"red"}>Hello World</Title>
      </Flex>
      <Console />
      <Button outlined color={"red"}>
          Send
      </Button>
    </ApWrapper>
  )
}

export default App;
