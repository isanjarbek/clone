import React, { useState } from 'react'
import Navbar from './components/header/navbar/main'
import SidebarMenu from './components/drawer'
import Swipers from './components/slider/main'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen} />
      <Swipers />
      <SidebarMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
