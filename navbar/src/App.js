import React from 'react'
import styled from 'styled-components'
import Btn from './Components/AntDesign/Button/Button'
import Grid from './Components/AntDesign/Grid/grid'
import Icon from './Components/AntDesign/Icon/icon'
import HeaderMenu from './Components/AntDesign/L/header'
import LayoutC from './Components/AntDesign/L/layout'
import BreadC from './Components/AntDesign/BreadCrumb/main'
import PGN from './Components/AntDesign/Pagination/pagination'
import CheckboxItem from './Components/AntDesign/checkbox'
import LoginForum from './Components/AntDesign/LoginForm/LoginForm'
import RadioInput from './Components/AntDesign/radio'
import SliderForm from './Components/AntDesign/Slider/slider'
import SwitchElements from './Components/AntDesign/switch'
import DrawerMenu from './Components/AntDesign/Drawer/drawer'
import SkeletonElements from './Components/AntDesign/Skeleton/skeleton'

const App = () => {
  return (
    <Container>
      <DrawerMenu />
      <br />
      <Btn />
      <br />
      <Icon />
      <Grid />
      <br />
      <LayoutC />
      <br />
      <HeaderMenu />
      <br />
      <BreadC />
      <br />
      <PGN />
      <br />
      <CheckboxItem />
      <br />
      <LoginForum />
      <br />
      <RadioInput />
      <br />
      <SliderForm />
      <br />
      <SwitchElements />
      <br />
      <SkeletonElements />
    </Container>
  );
}
const Container = styled.div`
  background-color: #fefefe;
  height: 100vh;
`

export default App;
