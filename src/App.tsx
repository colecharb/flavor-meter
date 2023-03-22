import './App.css'
import CoffeeInfo from './components/CoffeeInfo';
import FlavorMeter, { Coffee } from './components/FlavorMeter'
import testCoffee from './testCoffee';


function App() {

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '40%' }}>
          <FlavorMeter coffee={testCoffee} />
        </div>

        <div style={{ marginLeft: '5%' }}>
          <CoffeeInfo coffee={testCoffee} />
        </div>
      </div>
    </div>
  )
}

export default App
