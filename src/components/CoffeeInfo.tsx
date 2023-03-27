import testCoffee from "../coffees";
import { Coffee, coffeeInfoListItems } from "./FlavorMeter";

export default function ({ coffee }: { coffee: Coffee }) {
  return (
    <>
      <div style={{ height: '2px', background: 'black', marginTop: '1em', marginBottom: '1em' }} />

      <div style={{ fontSize: 28, fontWeight: 'bold' }}>
        {coffee.name}
      </div>

      <div style={{ color: "red", fontSize: 20, fontVariant: 'tabular-nums' }} >
        {`$${coffee.price} | 12 oz. bag`}
      </div>

      <p>
        {coffeeInfoListItems.map((value) => (
          <div style={{ fontSize: 16 }}>
            <>
              <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                {`${value} – `}
              </span>
              {coffee[value]}
            </>
          </div>
        ))}
      </p>

      <p>
        {coffee.description}
      </p>

    </>
  )
}