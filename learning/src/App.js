import React, { useState } from 'react'
import './App.css';
import TransitionsModal from './components/modal/main'
import TabsWrappedLabel from './components/tabs/main'
import HideAppBar from './components/scroll-bar/main'

// import NavbarMenu from './components/navbar/main'
// import Navbar from './components/navbar/navbar'

function App() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="App">
      {/* <NavbarMenu open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} /> */}
      <HideAppBar/>
      <TransitionsModal/>
      <TabsWrappedLabel/>
    </div>
  );
}

export default App;
