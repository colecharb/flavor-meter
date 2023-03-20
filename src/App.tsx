import './App.css'
import FlavorMeter, { Coffee } from './components/FlavorMeter'
import testCoffee from './testCoffee';


function App() {

  return (
    <div className="App">
      <FlavorMeter coffee={testCoffee} />
      {/* <img style={{ width: '100%' }} src='../public/flavor-meter-ref.jpg' /> */}
    </div>
  )
}

export default App
