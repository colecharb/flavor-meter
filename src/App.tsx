import './App.css'
import CoffeeInfo from './components/CoffeeInfo';
import FlavorMeter, { Coffee } from './components/FlavorMeter'
import coffees from './coffees';
import { useState } from 'react';
import SimilarCoffees from './components/SimilarCoffees';


function App() {

  // init with random coffee from coffees
  const getRandomCoffeeIndex = () => Math.floor(Math.random() * coffees.length);

  const [coffeeIndex, setCoffeeIndex] = useState<number>(getRandomCoffeeIndex());

  const coffee = coffees[coffeeIndex];

  return (
    <div className="App">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '2em'
      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          // width: '50%',
          flex: 1,
          minWidth: '300px',
          maxWidth: '400px'
        }}>

          <div style={{ height: '2px', background: 'black', marginTop: '1em', marginBottom: '1em' }} />

          <div style={{ display: 'block', width: '100%' }}>
            <FlavorMeter coffee={coffee} />
          </div>

          <SimilarCoffees
            index={coffeeIndex}
            coffees={coffees}
            setCoffeeIndex={setCoffeeIndex}
          />

        </div>

        <div style={{ flex: 2, minWidth: '300px' }}>
          <CoffeeInfo coffee={coffee} />
        </div>

      </div>

      <div style={{ height: '2px', background: 'black', marginTop: '1em', marginBottom: '1em' }} />

      <span style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        All Coffees
      </span>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {coffees.map((coffee, index) =>
          <button
            onClick={() => setCoffeeIndex(index)}
          >
            {coffee.name}
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
