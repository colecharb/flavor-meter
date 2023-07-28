import { Coffee } from './FlavorMeter';
import { FlavorMetric } from './FlavorMetrics';
import HorizontalLine from './HorizontalLine';

export const THRESHOLD = 100;
export const NUMBER_SIMILAR = 3;

export default function SimilarCoffees({
  index,
  coffees,
  setCoffeeIndex,
  flavorMetric,
}: {
  index: number;
  coffees: Coffee[];
  setCoffeeIndex: React.Dispatch<React.SetStateAction<number>>;
  flavorMetric: FlavorMetric;
}) {
  const coffee = coffees[index];

  const getCoffeeDistances = ({
    toIndex,
    from,
  }: {
    toIndex: number;
    from: Coffee[];
  }) => {
    const coffees = from;
    const coffee = coffees[toIndex];

    const coffeeDistancesAndIndices = coffees.map((c, i) => {
      return { coffee: c, index: i, distance: flavorMetric(coffee, c) };
    });

    return coffeeDistancesAndIndices;
  };

  const topSimilarCoffeeIndices = (n: number = 5) =>
    getCoffeeDistances({
      toIndex: index,
      from: coffees,
    })
      .filter(
        (obj) =>
          obj.coffee.name !== coffee.name && obj.coffee.roast === coffee.roast
        // && obj.distance <= THRESHOLD
      )
      .sort((a, b) => a.distance - b.distance)
      .map((value) => value.index)
      .slice(0, n);

  return (
    <>
      <HorizontalLine />

      <h4>Similar Coffees</h4>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '0.5em',
        }}
      >
        {topSimilarCoffeeIndices(NUMBER_SIMILAR).map((i) => (
          <button
            key={coffees[i].name}
            onClick={() => setCoffeeIndex(i)}
            // style={{ textAlign: 'left', paddingLeft: '0px' }}
          >
            {coffees[i].name}
          </button>
        ))}
      </div>
    </>
  );
}
