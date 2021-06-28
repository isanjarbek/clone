import React from 'react'
import Accardion from './components/Accordion/Accardion';
import Components from './components/main';

import FunctionContextComponents from './components/useContext/FunctionContextComponents'
import { ThemeProvider } from './components/useContext/ThemeContext'

import Input from './components/input/input'


export default function App() {

  const [PasswordInputType, ToggleIcon] = Input()

  return (
    <div className="App">

      <Components />
      {/* <Accardion title="Title1" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, officia reprehenderit deserunt id animi molestias praesentium minima quasi odio, quisquam possimus voluptatem rerum, sit facere incidunt dolore ad perspiciatis sed." />
      
      <Accardion title="Title2" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, officia reprehenderit deserunt id animi molestias praesentium minima quasi odio, quisquam possimus voluptatem rerum, sit facere incidunt dolore ad perspiciatis sed." />

      <Accardion title="Title3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, officia reprehenderit deserunt id animi molestias praesentium minima quasi odio, quisquam possimus voluptatem rerum, sit facere incidunt dolore ad perspiciatis sed." /> */}

      <ThemeProvider>
        <FunctionContextComponents />
      </ThemeProvider>
      {/*       
      <div className="input-elements">
        <input type={PasswordInputType} name="" id="" />
        <div className="icon-toggle">{ToggleIcon}</div>
      </div> */}
   
      
    </div>
  );
}

