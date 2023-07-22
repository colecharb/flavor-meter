import { Coffee, FlavorName } from "./FlavorMeter";
import HorizontalLine from "./HorizontalLine";

export const THRESHOLD = 100;
export const NUMBER_SIMILAR = 3;

export default function ({ index, coffees, setCoffeeIndex }: { index: number, coffees: Coffee[], setCoffeeIndex: React.Dispatch<React.SetStateAction<number>> }) {

  const coffee = coffees[index];

  const similarCoffeeIndices = getSimilarCoffeeIndices({
    toIndex: index,
    from: coffees,
    threshold: THRESHOLD,
  });

  const topSimilarCoffeeIndices = (n: number = 5) => getCoffeeDistances({
    toIndex: index,
    from: coffees
  }).filter((obj) =>
    obj.coffee.name !== coffee.name
    && obj.coffee.roast === coffee.roast
    // && obj.distance <= THRESHOLD
  ).sort((a, b) =>
    a.distance - b.distance
  ).map((value) =>
    value.index
  ).slice(0, n);

  console.log(similarCoffeeIndices);

  return (
    <>
      <HorizontalLine />

      <h4>
        Similar Coffees
      </h4>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '0.5em' }}>
        {topSimilarCoffeeIndices(NUMBER_SIMILAR).map(i => (
          <button
            onClick={() => setCoffeeIndex(i)}
          // style={{ textAlign: 'left', paddingLeft: '0px' }}
          >
            {coffees[i].name}
          </button>
        ))}
      </div>

    </>
  )
}


const getSimilarCoffeeIndices = ({ toIndex, from, threshold }: { toIndex: number, from: Coffee[], threshold: number }) => {

  const coffees = from;

  const coffee = coffees[toIndex];

  return [...Array(coffees.length).keys()].filter((i) =>
    coffee.name !== coffees[i].name
    // && coffee.roast === coffees[i].roast
    && euclidean(coffee, coffees[i]) <= threshold
  );
}

const getCoffeeDistances = ({ toIndex, from }: { toIndex: number, from: Coffee[] }) => {
  const coffees = from;
  const coffee = coffees[toIndex];

  const coffeeDistancesAndIndices = coffees.map((c, i) => { return ({ coffee: c, index: i, distance: euclidean(coffee, c) }) })

  return coffeeDistancesAndIndices;
}


type Metric = (c1: Coffee, c2: Coffee) => number;

const euclidean: Metric = (c1, c2) => {

  const flavors = Object.keys(c1.flavorLevels) as FlavorName[];

  const squaredDifferences = flavors.map(flavor =>
    Math.pow(c1.flavorLevels[flavor] - c2.flavorLevels[flavor], 2)
  );

  const sumOfSquaredDifferences = squaredDifferences.reduce((previous, current) => previous + current)

  return Math.sqrt(sumOfSquaredDifferences);
};