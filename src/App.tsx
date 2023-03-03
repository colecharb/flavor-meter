import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FlavorMeter, { Coffee } from './components/FlavorMeter'

function App() {
  
  const someCoffee: Coffee = {
    name: 'Perro Blanco',
    type: 'blend',
    region: 'South America',
    description: 'This blend will cure all of your ailments, guaranteed!',
    flavors: {
      chocolate: 2,
      nut: 3,
      fruit: 2,
      spice: 1,
      floral: 0,
      earth: 2,
      citrus: 1
    },
  }

  return (
    <div className="App">
      <FlavorMeter coffee={someCoffee}/>
    </div>
  )
}

export default App
