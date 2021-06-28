import React from 'react'
import HeaderTop from './components/header-top/index.jsx'
import HeaderCenter from './components/headar-center/main'
import Section from './components/section/main'
import Evolution from './components/evolution/evolution'
import Partners from './components/partners/partners'
import Feautures from './components/features/main'
import Category from './components/category/category'

function App() {
  return (
    <div>
      <HeaderTop />
      <HeaderCenter />
      <Section />
      <Evolution />
      <Partners />
      <Feautures />
      <Category />
    </div>
  )
}
export default App