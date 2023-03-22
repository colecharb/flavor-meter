import testCoffee from "../testCoffee";
import { Coffee, coffeeInfoListItems } from "./FlavorMeter";

export default function ({ coffee }: { coffee: Coffee }) {
  return (
    <>
      <div style={{ fontSize: 28, fontWeight: 'bold' }}>
        {coffee.name}
      </div>

      <div style={{ color: "red", fontSize: 20, fontVariant: 'tabular-nums' }} >
        {`$${coffee.price} | 12 oz. bag`}
      </div>


      {coffeeInfoListItems.map((value) => (
        <div style={{ fontSize: 16 }}>
          <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
            {`${value} – `}
          </span>
          {testCoffee[value]}
        </div>
      ))}

    </>
  )
}